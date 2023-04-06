import React, { useEffect, useState } from "react";
import cn from "clsx";
import { useActions } from "@/hooks/useActions";

const CoffeSort = () => {
  const [sort, setSort] = useState("all");
  const onClickSort = (sort: string) => {
    setSort(sort);
  };
  const { fetchGetAll, fetchGetByType } = useActions();
  useEffect(() => {
    if (sort !== "all") {
      fetchGetByType(sort);
    } else {
      fetchGetAll();
    }
  }, [sort]);
  return (
    <div className="m-8">
      <ul className="flex  gap-7 justify-center cursor-pointer">
        <li
          onClick={() => onClickSort("all")}
          className={cn(sort === "all" && "text-indigo-500")}
        >
          Все
        </li>
        <li
          onClick={() => onClickSort("seed")}
          className={cn(sort === "seed" && "text-indigo-500")}
        >
          Зерно
        </li>
        <li
          onClick={() => onClickSort("capsule")}
          className={cn(sort === "capsule" && "text-indigo-500")}
        >
          Капсулы
        </li>
        <li
          onClick={() => onClickSort("drip")}
          className={cn(sort === "drip" && "text-indigo-500")}
        >
          Дрип пакеты
        </li>
      </ul>
    </div>
  );
};

export default CoffeSort;
