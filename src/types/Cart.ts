export interface ICart {
  id: number;
  name: string;
  image: string;
  price: number;
  count: number;
}

export interface cartItems {
  cartItems: ICart[];
  totalPrice: number;
}
