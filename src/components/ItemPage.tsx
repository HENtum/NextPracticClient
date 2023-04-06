import Link from "next/link";
import { Iitems } from "@/types/Iitems";
import { FC, useState } from "react";
import Image from "next/image";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { ICart } from "@/types/Cart";
import { HTTP } from "@/contstance/env.constant";
import { useCart } from "@/hooks/useCart";
import { useActions } from "@/hooks/useActions";

interface ItemPage {
  item: Iitems;
}

const ItemPage: FC<ItemPage> = ({ item }) => {
  const { id, name, price, about, images } = item;
  const [image, setImage] = useState(0);
  const { cart } = useCart();
  const isCart = cart.some((obj) => obj.id === item?.id);
  const nextImage = () => {
    if (image < item?.images.length) {
      setImage(+1);
    }
  };
  const prevImage = () => {
    if (image > 0) {
      setImage(image - 1);
    }
  };
  const { addCart, removeCart } = useActions();
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
    <div className="flex flex-col mx-4">
      <div className="flex mt-10 gap-10">
        <Link className="text-indigo-700" href={"/"}>
          На главную
        </Link>
        <div className="flex flex-col justify-center items-center -ml-10 mt-10">
          <Image
            className="flex"
            src={`${HTTP}/${images[image]}`}
            alt="CoffeImage"
            width={500}
            height={500}
          />
          <div className="flex text-4xl gap-6">
            <button
              className="hover:text-sky-600 cursor-pointer"
              onClick={prevImage}
            >
              <AiFillCaretLeft />
            </button>
            <button
              className="hover:text-sky-600 cursor-pointer"
              onClick={nextImage}
            >
              <AiFillCaretRight />
            </button>
          </div>
        </div>
        <div>
          <h1 className="mt-11 font-semibold">{name}</h1>
          <p className="mt-10 leading-loose w-96">{about}</p>
        </div>
        <div className="mt-32 ml-10">
          <button
            onClick={changeCarts}
            className=" bg-emerald-400 rounded-xl p-2 text-4xl"
          >
            {isCart ? "Удалить с корзины" : "Добавить в корзину"}
          </button>
          <p className="mt-5 text-4xl text-sky-600">{price} ₽</p>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
