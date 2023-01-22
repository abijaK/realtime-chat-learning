import React, { useEffect, useState } from 'react'

import socketIOClient from 'socket.io-client'
import { ChatBoxReciever, ChatBoxSender } from './ChatBox';
import InputText from './InputText';
import UserLogin from './UserLogin';

export default function ChatContainer() {

let socketio = socketIOClient('http://localhost:5001');
const [chats, setChats] = useState([]);
const [user, setUser] = useState('user');
const [avatar, setAvatar] = useState(localStorage.getItem('avatar'));

useEffect(() => {
  socketio.on('chat', senderChats => {
    setChats(senderChats);
  })
}, []);

// method that send chat to socket
  const sendChatToSocket = (chat) => {
    socketio.emit('chat', chat);
  }

  // add a chat into our existed chat
  const addMessage = (chat) => {
    const newChat = {...chat, user, avatar};  // We import everything that concerns the user

    setChats([...chats, newChat]);  // We set an array that contains every single of conservation

    sendChatToSocket([...chats, newChat]);  // We send that chats to the socket
  }

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('avatar');
    setUser('');
  }

  const ChatsList = () => {
    return chats.map((chat, index) => {
      // if the chat's user is the same with the local user then user is the Sender
      if (chat.user === user) return <ChatBoxSender key={index} message={chat.message} avatar={avatar} />
      // else user's the Reciever of message
      return <ChatBoxReciever key={index} message={chat.message} avatar={avatar} />
    })
  }

  return (
    <div>

      user ? 
      <div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <h4>Username: {user}</h4>
          <p onClick={() => logout()} style={{color:'blue', cursor:'pointer'}}>Log Out</p>
        </div>
        {/* We implement ChatsList and InputText*/}
        <ChatsList />
        <InputText addMessage={addMessage} />
      </div>
      :
        <UserLogin setUser = {setUser} />
    </div>
  )
}
