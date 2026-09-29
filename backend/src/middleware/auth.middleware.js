import { getAuth, clerkClient } from "@clerk/express";
import User from "../models/user.model.js";

export async function protectRoute(req , res , next) {
    try{
        const {userId} = getAuth(req);

        if(!userId){
         res.status(401).json({message: "Unauthorized"});
         return;
        }

        let user = await User.findOne({clerkId: userId})

        if(!user){
            try {
                const clerkUser = await clerkClient.users.getUser(userId);
                const email = clerkUser.emailAddresses?.find((e) => e.id === clerkUser.primaryEmailAddressId)?.emailAddress || clerkUser.emailAddresses?.[0]?.emailAddress || "";
                const fullName = [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") || clerkUser.username || email?.split("@")[0] || "User";
                user = await User.create({
                    clerkId: userId,
                    email,
                    fullName,
                    profilePic: clerkUser.imageUrl || "",
                });
            } catch (syncError) {
                console.error("Failed to auto-sync Clerk user:", syncError.message);
            }
        }

        if(!user){
            res.status(404).json({message: "User profile is not synced yet"});
            return;
        }

        req.user = user;

        next();

    }
    catch(error){

        console.error("Error in protectRoutes middleware:", error.message);
        res.status(500).json({message: "Internal server error"});
    }

}