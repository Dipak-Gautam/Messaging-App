import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./screens/Authentication/Login";
import SignUp from "./screens/Authentication/SignUp";
import Home from "./screens/MainScreen/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AddFriends from "./screens/MainScreen/Friends/AddFriends";
import ChatScreen from "./screens/MainScreen/ChatScreen/ChatScreen";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
