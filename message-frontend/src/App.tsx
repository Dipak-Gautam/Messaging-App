import { useEffect, useState } from "react";
import darkTheme, { toggleDarkMode } from "./component/functions/darkTheme";
import SignUp from "./screens/Authentication/SignUp";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    darkTheme(setTheme);
  }, []);

  return (
    <div className="flex flex-1 bg-white dark:bg-dark h-screen w-screen flex-col">
      <SignUp />
    </div>
  );
}

export default App;
