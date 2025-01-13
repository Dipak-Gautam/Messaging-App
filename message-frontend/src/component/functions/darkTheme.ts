const updateDocumentClass = (theme: string) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const darkTheme = (setTheme: React.Dispatch<React.SetStateAction<string>>) => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = prefersDark ? "dark" : "light";
  setTheme(initialTheme);
  updateDocumentClass(initialTheme);
};

const toggleDarkMode = (
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>
) => {
  const newTheme = theme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  updateDocumentClass(newTheme);
};

export { updateDocumentClass };
export { toggleDarkMode };
export default darkTheme;
