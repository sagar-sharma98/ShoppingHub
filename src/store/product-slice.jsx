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
    product: {
      id: 0,
      image: "",
      title: "",
      price: 0,
      category: "",
    },
    totalItem: 0,
    totalPrice: 0,
  },

  reducers: {
    buyProductBtn(state, action) {
      const item = state.products.find((item) => item.id === action.payload);
      state.product = {
        ...state.product,
        id: action.payload,
        title: item.title,
        price: Math.round(item.price * 100),
        category: item.category,
        image: item.image,
      };
    },

    wishListBtn(state, action) {
      console.log(action.payload);
      const wishlistItem = state.products.find(
        (item) => item.id === action.payload
      );
      console.log(wishlistItem);
      const isItem = state.wishList.find((item) => item.id === action.payload);
      if (!isItem) {
        state.wishList.push(wishlistItem);
      }
    },

    wishItemRemoveHandler(state, action){
      state.wishList = state.wishList.filter((item) => item.id !== action.payload);
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const productAction = productSlice.actions;
export default productSlice;
