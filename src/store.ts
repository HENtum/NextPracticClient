import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import ItemSlice from "./slices/ItemSlice";

const store = configureStore({
  reducer: {
    item: ItemSlice.reducer,
    cart: CartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
