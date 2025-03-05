import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../models/IProducts";

const productSlice = createSlice({
  name: "product",
  initialState: { products: <IProduct[]>[] },
  reducers: {
    loadAllProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});
export const { loadAllProducts } = productSlice.actions;
export default productSlice.reducer;
