import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("products/fetchData", async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    wishList: [],
    product: [],
    category: [],
    totalItem: 0,
    totalPrice: 0,
    login: false,
  },

  reducers: {
    buyProductBtn(state, action) {
      const item = state.products.find((item) => item.id === action.payload);
      state.product.pop();
      state.product.push(item);
    },

    wishListBtn(state, action) {
      const wishlistItem = state.products.find(
        (item) => item.id === action.payload
      );
      const isItem = state.wishList.find((item) => item.id === action.payload);
      if (!isItem) {
        state.wishList.push(wishlistItem);
      }
    },

    wishItemRemoveHandler(state, action) {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload
      );
    },

    categoryItemHandler(state, action) {
      console.log(state.products);
      console.log(action.payload);
      state.category = state.products.filter(
        (item) => item.category === action.payload
      );
      console.log(state.category);
    },

    LoginSuccess(state, action) {
      state.login = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const productAction = productSlice.actions;
export default productSlice;
