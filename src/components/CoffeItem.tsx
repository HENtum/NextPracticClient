import { ICart } from "@/types/Cart";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { HTTP } from "../contstance/env.constant";
import { useCart } from "@/hooks/useCart";
import { useActions } from "@/hooks/useActions";
import Cookies from "js-cookie";

interface CoffeItem {
  id: number;
  name: string;
  images: string[];
  price: number;
  slug: string;
  description: string;
}

const CoffeItem: FC<CoffeItem> = ({
  id,
  name,
  images,
  price,
  slug,
  description,
}) => {
  const { cart } = useCart();
  const isCart = cart.some((obj) => obj.id === id);
  const { removeCart, addCart } = useActions();
  const changeCarts = () => {
    const sendParams: ICart = {
      id: id,
      name: name,
      image: images[0],
      price: price,
      count: 1,
    };
    isCart ? removeCart(id) : addCart(sendParams);
  };

  return (
    <div className="border-2 rounded-md border-white flex flex-col justify-center gap-3 items-center  hover:border-green-500">
      <Link
        className="flex flex-col justify-center items-center"
        href={`/coffe/${slug}`}
      >
        <Image
          className="mx-auto"
          src={`${HTTP}/${images[0]}`}
          alt="Image"
          width={250}
          height={250}
        />

        <p className="mx-auto">{name}</p>
        <p className="text-teal-500 mt-2 max-w-xs">{description}</p>
      </Link>
      <div className="flex justify-center gap-2">
        <p className="text-cyan-400">{price} ₽</p>
        <button onClick={changeCarts} className="text-lime-300">
          {isCart ? "Удалить с корзины" : "Добавить в корзину"}
        </button>
      </div>
    </div>
  );
};

export default CoffeItem;
