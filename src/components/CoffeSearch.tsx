import { useActions } from "@/hooks/useActions";
import React from "react";

const CoffeSearch = () => {
  const { searchItems, fetchGetAll } = useActions();
  const sendSearchParams = (e: any) => {
    if (!e.target.value) {
      fetchGetAll();
    } else {
      searchItems(e.target.value.toLowerCase());
    }
  };
  return (
    <div>
      <input
        onChange={(e) => sendSearchParams(e)}
        className="border-none"
        placeholder="Поиск..."
      />
    </div>
  );
};

export default CoffeSearch;
