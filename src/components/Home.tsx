import { RootState } from "@/store";
import Meta from "@/ui/Meta";
import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import CoffeSearch from "./CoffeSearch";
import CoffeSort from "./CoffeSort";
import GetCoffe from "./GetCoffe";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <Meta title="Home" description="HomePage" />
      <div className="m-5">
        <div className="flex ml-40 gap-44 align-text-bottoms">
          <CoffeSearch />
          <CoffeSort />
          <Cart />
        </div>
        <GetCoffe />
      </div>
    </Layout>
  );
};

export default Home;
