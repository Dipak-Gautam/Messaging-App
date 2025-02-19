import { useEffect, useState } from "react";
import darkTheme, { toggleDarkMode } from "./component/functions/darkTheme";
import Index from "./screens/Authentication/Index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./screens/Authentication/Login";
import SignUp from "./screens/Authentication/SignUp";
import Home from "./screens/MainScreen/Home";
import ChatScreen from "./screens/MainScreen/ChatScreen/ChatScreen";
import AddFriends from "./screens/MainScreen/Friends/AddFriends";
import getToken from "./Functions/localStorage/getToken";
import { useDispatch } from "react-redux";
import FriendRequest from "./screens/MainScreen/Friends/FriendRequest";
import MessageModal from "./component/Modal/MessageModal";
import Setting from "./screens/MainScreen/Settings/Setting";
import TaskScreen from "./screens/MainScreen/Task/TaskScreen";
import HomeScreen from "./screens/MainScreen/HomeScreen/HomeScreen";
import GroupChat from "./component/GroupChat/GroupChat";

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/home",
    element: <Home />,
    children: [
      { path: "/home/", element: <HomeScreen /> },
      { path: "/home/add-friend", element: <AddFriends /> },
      { path: "/home/chats", element: <ChatScreen /> },
      { path: "/home/friend-request", element: <FriendRequest /> },
      { path: "home/setting", element: <Setting /> },
      { path: "home/task", element: <TaskScreen /> },
      // { path: "/home/group-chat", element: <GroupChat /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    darkTheme(setTheme);
  }, []);
  useEffect(() => {
    getToken(dispatch);
  }, []);

  return (
    <div className="flex flex-1 bg-white dark:bg-dark h-screen w-screen flex-col">
      <RouterProvider router={router} />
      <MessageModal />
    </div>
  );
}

export default App;
