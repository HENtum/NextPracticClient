import { instance } from "@/api/api.interceptor";
import { Iitems } from "@/types/Iitems";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGetAll = createAsyncThunk<Iitems[]>(
  "items/getAll",
  async () => {
    const { data } = await instance({
      url: "/items",
      method: "GET",
    });
    return data;
  }
);

export const fetchGetByType = createAsyncThunk<Iitems[], string>(
  "items/getByType",
  async (params: string) => {
    const { data } = await instance({
      url: `/items/type/${params}`,
      method: "GET",
    });
    return data;
  }
);
export const fetchBySlug = createAsyncThunk<Iitems, string>(
  "items/slug",
  async (params: string) => {
    const { data } = await instance({
      url: `/items/slug/${params}`,
      method: "GET",
    });
    return data;
  }
);
