import React from 'react'
import toast from 'react-hot-toast'

const ChatPage = () => {
  return (
    <div>ChatPage

      <button onClick={()=> toast.success("you clicked")}>Click me</button>
    </div>
  )
}

export default ChatPage