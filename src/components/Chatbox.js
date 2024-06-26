import React, { useState } from 'react'
import EmojiPicker from "emoji-picker-react"
import './chatbox.css'
import {MentionsInput, Mention} from "react-mentions"
import mentionInputStyle from "./mentionInputStyle"
import Chat from "./Chat"


const user_list = [{id: 'alan', display:"Alan"}, {id: "bob", display:"Bob"}, {id: 'carol', display:"Carol"},  {id: 'dean', display:"Dean"}, {id: 'elin', display: "Elin"}]


const users = [
    {
        id: "alan",
        display: 'Alan'
    },
    {
        id: "bob",
        display: "Bob"
    },
]

const Chatbox = () => {
    const [user, setUser] = useState(user_list[0].display)
  
  const randomUser = ()=> {
    const index = Math.floor(Math.random() * user_list.length)
    setUser(user_list[index].display)
  }
    const [message, setMessage] = useState('')
    const [chats, setChats] = useState([
        {
            userName: "Bob",
            message: "Welcome to Team Chat. 👋👋 Send a message now to start interacting with other users in the app. ⬇️ ",
            createAt: new Date().toLocaleString().slice(11, 15)+ new Date().toLocaleString().slice(18)
        }
    ]);
    const [showPicker, setShowPicker] = useState(false)

    const onEmojiClick = (emojiObject)=> {
        // console.log(event)
        console.log(emojiObject)
        setMessage((prevMessage)=> prevMessage + emojiObject.emoji)
        setShowPicker(false)
    }

    
    const submitHandle = (e) => {
        
        randomUser()
        const time = new Date().toLocaleString().slice(11, 15)+ new Date().toLocaleString().slice(18)
        const newChats = {
            userName: user,
            message: message,
            createAt: time
        }
        setChats([...chats, newChats])
        setMessage('')
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            e.preventDefault()
            submitHandle()
            setMessage('')
        }
        
    }
    // console.log(chats)
  return (
    <div className="chatbox">
      <div className="chats">
        {chats.length>0 ? 
        
        chats.map((chat, index)=> (
            <Chat key={index} chat={chat} />
        ))
        
        : null}
        
        
      </div>
      <div className="input">
        <form>
            <div className="input-wrapper">
            <MentionsInput style={mentionInputStyle} singleLine={true} onKeyDown={handleKeyDown}  value={message} onChange={(e)=> setMessage(e.target.value)} placeholder="Type Message">
                <Mention 
                 data={user_list}
                 markup="@__display__"
                 appendSpaceOnAdd= {true}
                style={{color: 'blue'}}
                />
            </MentionsInput>

            {/* <input type="text" placeholder="Type Message" value={message} onChange={(e)=> setMessage(e.target.value)}/> */}
            <span onClick={()=> setShowPicker(!showPicker)}><i className="fa-regular fa-face-smile"></i></span>
            </div>
            <div className="emojis">
            {showPicker && (
                <EmojiPicker width={{width: '70%'}} onEmojiClick={onEmojiClick} Theme='dark'/>
            )}
            </div>
            {/* <button type="submit" onClick={submitHandle}>submit</button> */}
        </form>
      </div>
    </div>
  )
}

export default Chatbox
