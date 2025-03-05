import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./state/UserSlice";
import productReducer from "./state/ProductSlice";

export const store = configureStore({
  reducer: {
    userStore: userReducer,
    productStore: productReducer,
  },
});
