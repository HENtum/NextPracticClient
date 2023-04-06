import React, { useEffect } from "react";
import CoffeItem from "./CoffeItem";
import Sceleton from "./Sceleton";
import { useItems } from "@/hooks/useItems";
import { useActions } from "@/hooks/useActions";

const GetCoffe = () => {
  const { fetchGetAll } = useActions();
  useEffect(() => {
    fetchGetAll();
  }, []);

  const items = useItems();
  const isFaind = items.find((obj) => obj.id !== null);
  return (
    <div className="grid gap-y-10 gap-x-5 grid-cols-4 justify-center align-middle">
      {isFaind ? (
        items.map((obj) => <CoffeItem key={obj.id} {...obj} />)
      ) : (
        <div>
          {[...new Array(9)].map((_, i) => (
            <Sceleton key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GetCoffe;
