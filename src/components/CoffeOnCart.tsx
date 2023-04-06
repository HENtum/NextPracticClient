import { HTTP } from "@/contstance/env.constant";
import { useActions } from "@/hooks/useActions";
import Image from "next/image";
import React, { FC } from "react";

interface CoffeOnCart {
  id: number;
  image: string;
  name: string;
  price: number;
  count: number;
}

const CoffeOnCart: FC<CoffeOnCart> = ({ id, image, name, price, count }) => {
  const { changeCountDec, changeCountInc, removeCart } = useActions();
  return (
    <div className="flex flex-col items-center">
      <Image src={`${HTTP}/${image}`} alt="image" width={150} height={100} />
      <p className="mt-2 text-slate-900">{name}</p>
      <div className="flex justify-center gap-5 mt-3 align-bottom items-end">
        <p className="text-teal-700">{price * count} ₽</p>
        <p className="text-indigo-700">
          кол-вo:
          <span className="text-xl">
            <button
              onClick={() => changeCountDec(id)}
              disabled={count === 1}
              className="text-3xl px-1 py-none rounded-lg bg-blue-200 mr-2 ml-1 disabled:opacity-20"
            >
              -
            </button>
            {count}
            <button
              onClick={() => changeCountInc(id)}
              className="text-3xl px-1 py-none rounded-lg bg-blue-200 ml-2"
            >
              +
            </button>
          </span>
        </p>
      </div>

      <button
        onClick={() => removeCart(id)}
        className=" transition ease-in-out delay-150 mt-3 text-white bg-slate-700 p-2 rounded-xl text-sm hover:bg-indigo-500 duration-300"
      >
        Удалить с корзины
      </button>
    </div>
  );
};

export default CoffeOnCart;
