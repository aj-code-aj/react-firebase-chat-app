import React, { useEffect, useState } from 'react'
import './chatlist.css';
import AddUser from '../../AddUser/AddUser';
import { useUserStore } from '../../lib/userStore';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const ChatList = () => {

  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();

  useEffect(() => {

    const unSub = onSnapshot(doc(db, 'userchats', currentUser.id), (doc) => {
      setChats(doc.data());
    })
    return () => {
      unSub();
    }
  }, [currentUser.id])

  console.log('Chats', chats);
  return (
    <div className='chatList'>
      <div className='search'>
        <div className='searchBar'>
          <img src='./search.png' alt='search' />
          <input type='text' placeholder='Search' />
        </div>
        <img src={addMode ? './minus.png' : './plus.png'} className='add'
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>

      {chats.map(chat => <div className='item' key={chat.chatId}>
        <img src='./avatar.png' alt='avatar' />
        <div className='texts'>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      )}

      {addMode && <AddUser />}
    </div>
  )
}

export default ChatList