import Details from "./components/Details/Details"
import List from "./components/List/List"
import Chats from "./components/Chats/Chats"
import Login from "./components/Login/Login";
import Notification from "./components/Notification/Notification";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/lib/firebase";
import { useUserStore } from "./components/lib/userStore";
import './index.css';

const App = () => {

  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log('AuthUSER:', user);
      fetchUserInfo(user?.uid);
    })
    return (() => {
      unSub();
    })
  }, [fetchUserInfo]);

  if (isLoading) <div className="loading">Loading...</div>

  console.log(currentUser);

  return (
    <div className='container'>
      {currentUser ? <>
        <List />
        <Chats />
        <Details />
      </>
        :
        <Login />
      }
      <Notification />
    </div>
  )
}

export default App