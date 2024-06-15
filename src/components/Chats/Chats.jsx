import React, { useEffect, useRef, useState } from 'react'
import './chats.css';
import EmojiPicker from 'emoji-picker-react';

const Chats = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const endRef = useRef();

  const handleEmoji = (e) => {
    console.log(e);
    setText((prev) => prev + e.emoji);
    setOpen(false);
  }

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [])

  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
          <img src='./avatar.png' alt='' />
          <div className='texts'>
            <span>John Doe</span>
            <p>Lorem ipsum dolor, sit amet</p>
          </div>
        </div>
        <div className='icons'>
          <img src='./phone.png' alt='photo' />
          <img src='./video.png' alt='video' />
          <img src='./info.png' alt='info' />
        </div>
      </div>

      <div className='center'>

        <div className='message'>
          <img src='./avatar.png' alt='avatar' />
          <div className='texts'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className='message own'>
          <div className='texts'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className='message'>
          <img src='./avatar.png' alt='avatar' />
          <div className='texts'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className='message own'>
          <div className='texts'>
            <img src='https://images.pexels.com/photos/13172901/pexels-photo-13172901.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div ref={endRef}></div>
      </div>
      <div className='bottom'>
        <div className='icons'>
          <img src='./img.png' alt='img' />
          <img src='./camera.png' alt='camera' />
          <img src='./mic.png' alt='mic' />
        </div>
        <input type='text' placeholder='Type a message...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className='emoji'>
          <img src='./emoji.png' alt='emoji' onClick={() => setOpen((prev) => !prev)} />
          <div className='picker'>
            <EmojiPicker open={open}
              onEmojiClick={handleEmoji}
            />
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>

  )
}

export default Chats;