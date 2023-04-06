import { cartItems, ICart } from "@/types/Cart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: cartItems = {
  cartItems: [],
  totalPrice: 0,
};

const cartItems = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<ICart>) {
      state.cartItems.push({ ...action.payload });
      state.totalPrice = state.cartItems.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      );
    },
    changeCountInc(state, action) {
      const isFind = state.cartItems.find((obj) => obj.id === action.payload);
      if (isFind) {
        isFind.count++;
        state.totalPrice = state.cartItems.reduce(
          (sum, obj) => obj.price * obj.count + sum,
          0
        );
      }
    },
    changeCountDec(state, action) {
      const isFind = state.cartItems.find((obj) => obj.id === action.payload);
      if (isFind) {
        isFind.count > 1 && isFind.count--;
        state.totalPrice = state.cartItems.reduce(
          (sum, obj) => obj.price * obj.count + sum,
          0
        );
      }
    },
    removeCart(state, action: PayloadAction<number | null>) {
      state.cartItems = state.cartItems.filter(
        (obj) => obj.id !== action.payload
      );
      state.totalPrice = state.cartItems.reduce(
        (sum, obj) => obj.price + sum,
        0
      );
    },
    deleteCart(state) {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addCart,
  changeCountInc,
  changeCountDec,
  removeCart,
  deleteCart,
} = cartItems.actions;
export default cartItems;
