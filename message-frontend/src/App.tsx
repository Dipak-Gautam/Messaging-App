import { useEffect, useState } from "react";
import darkTheme, { toggleDarkMode } from "./component/functions/darkTheme";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    darkTheme(setTheme);
  }, []);

  return (
    <div className="flex flex-1 bg-white dark:bg-black h-screen w-screen flex-col">
      <p className="text-black dark:text-white">Hello</p>
      <button onClick={() => toggleDarkMode(theme, setTheme)}>
        Toggle Dark Mode
      </button>
      <p className="text-black dark:text-white">Current Theme: {theme}</p>
    </div>
  );
}

export default App;
