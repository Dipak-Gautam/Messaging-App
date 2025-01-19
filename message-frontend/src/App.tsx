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

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/home",
    element: <Home />,
    children: [
      { path: "/home/", element: <ChatScreen /> },
      { path: "/home/add-friend", element: <AddFriends /> },
      { path: "/home/chats", element: <ChatScreen /> },
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
    </div>
  );
}

export default App;
