import {
  fetchBySlug,
  fetchGetAll,
  fetchGetByType,
} from "@/actions/items.actions";
import { ItemSlice, loadEnam } from "@/types/Iitems";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ItemSlice = {
  items: [
    {
      id: 0,
      createdAt: "",
      updatedAt: "",
      name: "",
      images: [""],
      price: 0,
      about: "",
      description: "",
      type: "",
      slug: "",
    },
  ],
  item: {
    id: 0,
    createdAt: "",
    updatedAt: "",
    name: "",
    images: [""],
    price: 0,
    about: "",
    description: "",
    type: "",
    slug: "",
  },
  message: loadEnam.LOADING,
};

const ItemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    searchItems(state, action) {
      state.items = state.items.filter((obj) =>
        obj.name.toLowerCase().includes(action.payload)
      );
    },
  },
  extraReducers: (builder) => {
    return (
      builder.addCase(fetchGetAll.pending, (state) => {
        state.message = loadEnam.LOADING;
        state.items = [];
      }),
      builder.addCase(fetchGetAll.fulfilled, (state, action) => {
        state.message = loadEnam.SUCCESS;
        state.items = action.payload;
      }),
      builder.addCase(fetchGetAll.rejected, (state) => {
        state.message = loadEnam.ERROR;
        state.items = [];
      }),
      builder.addCase(fetchGetByType.pending, (state) => {
        state.message = loadEnam.LOADING;
        state.items = [];
      }),
      builder.addCase(fetchGetByType.fulfilled, (state, action) => {
        state.message = loadEnam.SUCCESS;
        state.items = action.payload;
      }),
      builder.addCase(fetchGetByType.rejected, (state) => {
        state.message = loadEnam.ERROR;
        state.items = [];
      }),
      builder.addCase(fetchBySlug.pending, (state) => {
        state.message = loadEnam.LOADING;
        state.item = {
          id: 0,
          createdAt: "",
          updatedAt: "",
          name: "",
          images: [""],
          price: 0,
          about: "",
          description: "",
          type: "",
          slug: "",
        };
      }),
      builder.addCase(fetchBySlug.fulfilled, (state, action) => {
        state.message = loadEnam.SUCCESS;
        state.item = action.payload;
      }),
      builder.addCase(fetchBySlug.rejected, (state) => {
        state.message = loadEnam.ERROR;
        state.item = {
          id: 0,
          createdAt: "",
          updatedAt: "",
          name: "",
          images: [""],
          price: 0,
          about: "",
          description: "",
          type: "",
          slug: "",
        };
      })
    );
  },
});
export const { searchItems } = ItemSlice.actions;
export default ItemSlice;
