import React, { useState } from 'react'

const Chat = ({chat}) => {
    const [like, setLike] = useState(0)
    const increaseLike = ()=> {
        setLike((prev)=> prev+1)
    }
  return (
    <div className="chat">
    <div className="chat-info">
        <p>{chat.userName}</p>
        <span>{chat.createAt}</span>
    </div>
    <div className="message-box">
        {chat.message}
        <span className="like"><i onClick={increaseLike} className="fa-solid fa-thumbs-up"></i><span className="counter">{like}</span></span>
    </div>
</div>
  )
}

export default Chat
