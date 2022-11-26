import {
  BellOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { sleep } from "../../../helpers/utils";
import CategoryTab from "./CategoryTab";
import categories from "./homeData";
import SubCategories from "./SubCategories";

function Card(props) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-md bg-white py-4 shadow-md">
      <img src={props.src} className="h-20" />
      <span className="text-lg font-bold">{props.title}</span>
    </div>
  );
}

function Banner(props) {
  return (
      <img src={props.src} className="h-40 w-auto rounded-md shadow-md"/>
  )
}

export default function HomeCustomer() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const changeCategory = async (categoryIndex) => {
    setIsLoading(true);
    await sleep(500);
    setIsLoading(false);
    setSelectedCategory(categoryIndex);
  };

  return (
    <>
      <div className="flex flex-row items-center gap-2 px-4 py-2">
        <img src="/assets/logo.png" className="h-10" />
        <span className="whitespace-nowrap text-lg font-bold text-primary">
          Hello Juan
        </span>
      </div>

      <div className="flex flex-row gap-4 overflow-x-auto talipaapp-scrollbar mx-4">
        <Banner src="/assets/images/banner1.svg"/>
        <Banner src="/assets/images/banner2.svg"/>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 mx-4">
        <Card title="Seller" src="/assets/images/seller.svg"/>
        <Card title="Buyer" src="/assets/images/buyer.svg"/>
        <Card title="Association" src="/assets/images/association.svg"/>
        <Card title="Public Market" src="/assets/images/market.svg"/>
        <Card title="News" src="/assets/images/news.svg"/>
      </div>
    </>
  );
}
