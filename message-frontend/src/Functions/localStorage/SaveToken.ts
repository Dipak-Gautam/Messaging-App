const asyncStorage = (token: string) => {
  localStorage.setItem("prevLogin", "true");
  localStorage.setItem("token", token);
};
export default asyncStorage;
