import { RootState } from "@/store";
import { useSelector } from "react-redux";

export const useItems = () => {
  const { items } = useSelector((state: RootState) => state.item);
  return items;
};
