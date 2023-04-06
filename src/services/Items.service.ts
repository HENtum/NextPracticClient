import { instance } from "@/api/api.interceptor";

export const ItemsService = {
  async getAll() {
    const { data } = await instance({
      url: "/items",
      method: "GET",
    });
    return data;
  },
  async getBySlug(param: string) {
    const { data } = await instance({
      url: `/items/slug/${param}`,
      method: "GET",
    });
    return data;
  },
  async getByType(param: string) {
    const { data } = await instance({
      url: `/items/type/${param}`,
      method: "GET",
    });
    return data;
  },
};
