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

const store = configureStore({
  reducer: {
    token: tokenSlice.reducer,
  },
});

export const tokenAction = tokenSlice.actions;
export default store;
