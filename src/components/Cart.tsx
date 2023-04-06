import React, { useState } from "react";
import cn from "clsx";
import CoffeOnCart from "./CoffeOnCart";
import { useCart } from "@/hooks/useCart";
import { useActions } from "@/hooks/useActions";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const { cart, totalPrice } = useCart();
  const { deleteCart } = useActions();

  const isCart = cart.some((obj) => obj.id !== 0);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={cn("cursor-pointer", open && "text-emerald-500")}
      >
        Корзина
      </button>

      <div
        className={cn(
          "p-2 w-72 bg-gray-200 absolute float-right inset-y-0 right-0 z-10 transition-transform flex flex-col items-center gap-5 overflow-scroll",
          !open && "translate-x-full hidden",
          open && "translate-x-0"
        )}
      >
        {isCart && (
          <div className="flex gap-2 mt-5 text-purple-600">
            Всего: {totalPrice} ₽
            <button className="text-blue-500" onClick={() => deleteCart()}>
              Очистить корзину
            </button>
          </div>
        )}
        <div className="flex flex-col items-center gap-10">
          {isCart ? (
            cart.map((obj) => <CoffeOnCart key={obj.id} {...obj} />)
          ) : (
            <div className="flex justify-center text-2xl">Корзина пустая</div>
          )}
          <div
            onClick={() => setOpen(false)}
            className="text-blue-600 cursor-pointer"
          >
            Закрыть
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
