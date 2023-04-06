export interface ItemSlice {
  items: Iitems[];
  item: Iitems;
  message: loadEnam;
}

export interface Iitems {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  images: string[];
  price: number;
  about: string;
  description: string;
  type: string;
  slug: string;
}
export enum loadEnam {
  LOADING = "Loading",
  SUCCESS = "Success",
  ERROR = "Error",
}
