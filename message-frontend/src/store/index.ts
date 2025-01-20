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

const modalSlice = createSlice({
  name: "modal",
  initialState: { display: false, title: undefined, type: undefined },
  reducers: {
    showModal: (state, action) => {
      const temp = {
        display: true,
        title: action.payload.title,
        type: action.payload.type,
      };
      state = temp;
      return state;
    },
    hideModal: (state) => {
      const temp = {
        display: false,
        title: undefined,
        type: undefined,
      };
      state = temp;
      return state;
    },
  },
});

const store = configureStore({
  reducer: {
    token: tokenSlice.reducer,
    userInfo: userInfoSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export const userInfoAction = userInfoSlice.actions;
export const tokenAction = tokenSlice.actions;
export const modalAction = modalSlice.actions;

export default store;
