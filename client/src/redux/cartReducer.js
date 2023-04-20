import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: [],
    totalQuantities: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      toast.success(
        `${action.payload.quantity} ${action.payload.title} added to cart`
      );
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
        state.totalQuantities += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
        state.totalQuantities += action.payload.quantity;
      }
      // state.totalQuantities = state.totalQuantities += action.payload.quantity;
    },

    increaseQty(state, action) {
      // state.cartItems = state.cartItems.map((item) => {
      //   if (item.id === action.payload.id) {
      //     return { ...item, quantity: item.quantity + 1 };
      //   }
      // });

      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    reset: (state) => {
      state.cartItems = [];
    },
  },
});

export default cartSlice;
