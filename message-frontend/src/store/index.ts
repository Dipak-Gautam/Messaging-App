import { configureStore, createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: "",
  reducers: {
    addToken: () => {
      console.log("add token called");
    },
  },
});

const store = configureStore({
  reducer: {
    token: tokenSlice.reducer,
  },
});

export const tokenAction = tokenSlice.actions;
export default store;
