import { RootState } from "@/store";
import { useSelector } from "react-redux";

export const useCart = () => {
  const { cartItems, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );
  return { cart: cartItems, totalPrice };
};
