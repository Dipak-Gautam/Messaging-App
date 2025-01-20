import { configureStore, createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: "",
  reducers: {
    addToken: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: null,
  reducers: {
    addUserInfo: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const store = configureStore({
  reducer: {
    token: tokenSlice.reducer,
    userInfo: userInfoSlice.reducer,
  },
});

export const userInfoAction = userInfoSlice.actions;
export const tokenAction = tokenSlice.actions;
export default store;
