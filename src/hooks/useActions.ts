import cartItems from "@/slices/CartSlice";
import ItemSlice from "@/slices/ItemSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import * as itemsActions from "@/actions/items.actions";
import { AppDispatch } from "@/store";

const rootActions = {
  ...cartItems.actions,
  ...ItemSlice.actions,
  ...itemsActions,
};

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
