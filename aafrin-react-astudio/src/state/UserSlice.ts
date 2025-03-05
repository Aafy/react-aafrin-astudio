import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../models/IUsers";

const initialState = { users: <IUser[]>[] };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadAllUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { loadAllUsers } = userSlice.actions;
export default userSlice.reducer;
