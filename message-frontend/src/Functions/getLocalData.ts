import { NavigateFunction } from "react-router-dom";

const getData = (navigate: NavigateFunction) => {
  let prev = localStorage.getItem("prevLogin");
  let token = localStorage.getItem("token");
  if (token == null) {
    if (prev == null) {
      navigate("/signup");
    } else {
      navigate("/login");
    }
  } else {
    navigate("/home");
  }
};
export default getData;
