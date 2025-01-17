import { useEffect, useState } from "react";
import darkTheme, { toggleDarkMode } from "./component/functions/darkTheme";
import SignUp from "./screens/Authentication/SignUp";
import Login from "./screens/Authentication/Login";
import Index from "./screens/Authentication/Index";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    darkTheme(setTheme);
  }, []);

  return (
    <div className="flex flex-1 bg-white dark:bg-dark h-screen w-screen flex-col">
      <Index />
    </div>
  );
}

export default App;
