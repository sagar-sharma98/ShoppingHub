import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
    totalItem: 0,
  },

  reducers: {
    addCart(state, action) {
      const cartItem = action.payload;
      const itemPresent = state.cart.find((item) => item.id === cartItem.id);

      if (!itemPresent) {
        const itemDetail = {
          image: cartItem.image,
          title: cartItem.title,
          id: cartItem.id,
          price: cartItem.price,
          itemquantity: 1,
        };
        state.cart.push(itemDetail);
        state.totalItem++;
        state.totalPrice = Math.round(state.totalPrice + cartItem.price);
      } else {
        state.cart = state.cart.map((item) => {
          if (item.id === itemPresent.id) {
            return {
              ...item,
              price: item.price + itemPresent.price,
              itemquantity: item.itemquantity + 1,
            };
          }
          return item;
        });
        state.totalItem++;
        state.totalPrice = Math.round(state.totalPrice + cartItem.price);
      }
    },

    itemNumberHandler(state, action){
        console.log(action.payload)
        state.totalItem = state.totalItem + action.payload - 1;
    },

    deleteCartItem(state, action) {
      const currentItem = state.cart.find((item) => item.id === action.payload);
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      state.totalItem = state.totalItem - currentItem.itemquantity;
      state.totalPrice = Math.round(state.totalPrice - currentItem.price);
    },

    emptyCart(state) {
      state.cart = [];
      state.totalItem = 0;
      state.totalPrice = 0;
    },

  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
