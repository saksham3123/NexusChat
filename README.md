# 💬 NexusChat

> A modern **real-time chat application** built with the MERN stack, Socket.IO, Clerk, and ImageKit.

NexusChat is a full-stack real-time messaging application designed to provide a smooth, responsive, and modern communication experience. It supports real-time messaging, authentication, media sharing, online presence, and a responsive chat interface.

---

## ✨ Features

- 🔐 **Secure Authentication** with Clerk
- 💬 **Real-time Messaging** using Socket.IO
- 👤 User profiles and user management
- 🟢 Real-time online/offline presence
- 📎 **Media & Image Sharing** using ImageKit
- 🖼️ Image/media upload and management
- ⚡ RESTful backend APIs with Express.js
- 🗄️ MongoDB database for persistent data storage
- 🎨 Responsive and modern chat UI
- 🌙 Theme support
- 🔄 Real-time conversation updates
- 📱 Responsive design for different screen sizes
- 🧩 Modular and scalable project architecture

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| ⚛️ React.js | UI development |
| 🎨 CSS | Styling |
| ⚡ Vite | Development & build tool |
| 📡 Axios | API communication |
| 🔌 Socket.IO Client | Real-time communication |
| 🗂️ Zustand | State management |

### Backend

| Technology | Purpose |
|---|---|
| 🟢 Node.js | Runtime environment |
| 🚂 Express.js | Backend framework |
| 🍃 MongoDB | Database |
| 🔌 Socket.IO | Real-time communication |
| 🔑 Clerk | Authentication |
| 🖼️ ImageKit | Media management |

---

## 🏗️ Architecture

```text
                         ┌─────────────────────┐
                         │       NexusChat     │
                         └──────────┬──────────┘
                                    │
                     ┌──────────────┴──────────────┐
                     │                             │
              ┌──────▼──────┐              ┌──────▼──────┐
              │   Frontend  │              │   Backend   │
              │    React    │              │ Node/Express│
              └──────┬──────┘              └──────┬──────┘
                     │                             │
             ┌───────▼───────┐             ┌──────▼───────┐
             │   Socket.IO   │◄───────────►│   Socket.IO  │
             │    Client     │             │    Server    │
             └───────────────┘             └──────┬───────┘
                                                   │
                                      ┌────────────┼────────────┐
                                      │            │            │
                                ┌─────▼─────┐ ┌────▼─────┐ ┌───▼──────┐
                                │  MongoDB  │ │  Clerk   │ │ ImageKit │
                                │ Database  │ │   Auth   │ │  Media   │
                                └───────────┘ └──────────┘ └──────────┘
```

---

## 📁 Project Structure

```text
NexusChat/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── message.controller.js
│   │   │
│   │   ├── lib/
│   │   │   ├── cron.js
│   │   │   ├── DB.js
│   │   │   ├── imagekit.js
│   │   │   └── socket.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js
│   │   │   └── upload.middleware.js
│   │   │
│   │   ├── models/
│   │   │   ├── message.model.js
│   │   │   └── user.model.js
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.route.js
│   │   │   └── message.route.js
│   │   │
│   │   ├── seeds/
│   │   │   └── user.seed.js
│   │   │
│   │   ├── webhooks/
│   │   │   └── clerk.webhook.js
│   │   │
│   │   └── index.js
│   │
│   ├── .env
│   ├── package.json
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   └── chat/
│   │   │
│   │   ├── context/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── styles/
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── .dockerignore
├── dockerfile
└── README.md
```

---

## 🔄 How It Works

### 1. Authentication

NexusChat uses **Clerk** for authentication.

```text
User
 │
 ▼
Clerk Authentication
 │
 ▼
Authenticated User
 │
 ▼
NexusChat Backend
 │
 ▼
MongoDB User Data
```

Clerk webhooks are used to synchronize user information with the application's database.

---

### 2. Real-Time Messaging

Messages are handled through a combination of REST APIs and Socket.IO.

```text
User A
   │
   │ Send Message
   ▼
React Frontend
   │
   ▼
Socket.IO
   │
   ▼
Node.js Server
   │
   ├──────────────► MongoDB
   │
   ▼
Socket.IO
   │
   ▼
User B
```

Socket.IO enables messages and relevant conversation updates to be delivered in real time without requiring the client to continuously refresh or poll the server.

---

### 3. Media Management

Media files are managed using **ImageKit**.

```text
User
 │
 ▼
Select Media
 │
 ▼
Frontend
 │
 ▼
Backend / ImageKit
 │
 ▼
ImageKit CDN
 │
 ▼
Media URL
 │
 ▼
Message stored with media reference
```

This keeps media management separate from the application's primary database.

---

## 🔐 Environment Variables

Create a `.env` file inside both the `frontend` and `backend` directories.

### Backend `.env`

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

FRONTEND_URL=http://localhost:5173
```

### Frontend `.env`

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

VITE_API_URL=http://localhost:3000
```

> ⚠️ Never commit your `.env` files or expose private API keys in your repository.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB
- Git

You will also need accounts/configuration for:

- Clerk
- ImageKit

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/NexusChat.git

cd NexusChat
```

---

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3. Configure Backend Environment

Create:

```text
backend/.env
```

and add the required environment variables.

---

### 4. Start the Backend

```bash
npm run dev
```

The backend will start on:

```text
http://localhost:3000
```

---

### 5. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

---

### 6. Configure Frontend Environment

Create:

```text
frontend/.env
```

and add the required frontend environment variables.

---

### 7. Start the Frontend

```bash
npm run dev
```

The frontend will typically be available at:

```text
http://localhost:5173
```

---

## 💻 API & Real-Time Layer

NexusChat follows a hybrid communication architecture:

### REST API

Used for operations such as:

- Authentication-related operations
- User data
- Conversation data
- Message persistence
- Media-related operations

### Socket.IO

Used for real-time events such as:

- Sending messages
- Receiving messages
- Online/offline presence
- Conversation updates
- Real-time UI synchronization

This separation keeps persistent application operations and real-time communication logically organized.

---

## 🗄️ Database

NexusChat uses **MongoDB** for persistent application data.

Core models include:

```text
User
 ├── Clerk User ID
 ├── Username
 ├── Profile information
 └── Other user metadata

Message
 ├── Sender
 ├── Receiver / Conversation
 ├── Message content
 ├── Media information
 └── Timestamps
```

---

## 🔒 Security

NexusChat incorporates several security mechanisms:

- Clerk-based authentication
- Protected backend routes
- Authentication middleware
- Environment-based secret management
- Server-side validation
- Webhook verification
- Separation of frontend and backend credentials

---

## 🐳 Docker

The project also includes Docker configuration for containerized deployment.

Build the application using:

```bash
docker build -t nexuschat .
```

Then run:

```bash
docker run -p 3000:3000 nexuschat
```

> Adjust the Docker configuration according to your production deployment architecture.

---

## 🧠 Key Engineering Concepts

This project demonstrates practical implementation of:

- Full-stack MERN architecture
- REST API development
- WebSocket-based communication
- Real-time state synchronization
- Authentication & authorization
- Database modeling with MongoDB
- Media upload and CDN management
- React component architecture
- Global state management
- Custom React hooks
- Middleware architecture
- Webhooks
- Environment configuration
- Docker-based deployment

---

## 🔮 Future Improvements

Potential future additions include:

- 👥 Group conversations
- ✔️ Message delivery/read receipts
- ✍️ Typing indicators
- 🔔 Push notifications
- 🔎 Message search
- 📌 Message pinning
- ↩️ Reply to messages
- 🗑️ Message deletion/editing
- 🎙️ Voice messages
- 📹 Video calling
- 🔒 End-to-end encryption
- 🤖 AI-powered chat features

---

## 📊 Project Highlights

| Area | Technology |
|---|---|
| Frontend | React.js |
| Backend | Node.js + Express.js |
| Database | MongoDB |
| Real-Time | Socket.IO |
| Authentication | Clerk |
| Media | ImageKit |
| State Management | Zustand |
| Build Tool | Vite |
| Containerization | Docker |

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

```bash
git commit -m "feat: add your feature"
```

4. Push your branch

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---

## 📄 License

This project is intended for educational and portfolio purposes.

---

## 👨‍💻 Author

**Saksham**

Built with ❤️ using the MERN stack, Socket.IO, Clerk, and ImageKit.

---

⭐ If you found NexusChat interesting, consider giving the repository a star!