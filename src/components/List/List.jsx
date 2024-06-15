import React from 'react'
import './list.css';
import ChatList from './ChatList/ChatList';
import Userinfo from './UserInfo/Userinfo';

const List = () => {
  return (
    <div className='list'>
      <Userinfo />
      <ChatList />
    </div>
  )
}

export default List