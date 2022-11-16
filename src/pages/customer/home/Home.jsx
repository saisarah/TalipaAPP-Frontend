import {
  BellOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge, Empty, Spin } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sleep } from "../../../helpers/utils";
import categories from "./homeData";

function SubcategoryCard({ name, image }) {
  return (
    <div className="bg-white p-4 text-center shadow">
      <Link
        to="/categories/1"
        className="mb-2 block font-semibold text-current"
      >
        {name}
      </Link>
      <div className="aspect-square w-full rounded bg-slate-400"></div>
    </div>
  );
}

function CategoryTab({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="talipaapp-scrollbar sticky top-0 flex overflow-x-auto bg-white px-4 pt-2 shadow">
      {categories.map(({ name }, i) => (
        <button
          onClick={() => setSelectedCategory(i)}
          key={name}
          className={`whitespace-nowrap border-b-2 px-4 py-2 ${
            selectedCategory === i
              ? "border-primary text-primary"
              : "border-white"
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

function SubCategories({ category, isLoading }) {
  const { subcategory } = category;

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spin size="large" tip="Fetching data"/>
      </div>
    )
  }

  if (subcategory.length === 0) {
    return <Empty />;
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {subcategory.map(({ name, image }) => (
        <SubcategoryCard key={name} name={name} image={image} />
      ))}
    </div>
  );
}

export default function HomeCustomer() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(false)

  const changeCategory = async(categoryIndex) => {
    setIsLoading(true)
    await sleep(500)
    setIsLoading(false)
    setSelectedCategory(categoryIndex)
  }

  return (
    <>
      <div className="bg-white px-4">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-xl font-bold">Home</h1>
          <div className="space-x-4">
            <Link to="/notifications">
              <BellOutlined style={{ fontSize: 24 }} />
            </Link>
            <Badge count={3}>
              <Link to="/likes">
                <HeartOutlined style={{ fontSize: 24 }} />
              </Link>
            </Badge>
            <Badge count={2}>
              <Link to="/cart">
                <ShoppingCartOutlined style={{ fontSize: 24 }} />
              </Link>
            </Badge>
          </div>
        </div>

        <div className="talipaapp-scrollbar overflow-auto py-2">
          <div className="flex gap-4">
            <img
              className="aspect-video h-36 rounded shadow"
              src="https://via.placeholder.com/500x350"
            />
            <img
              className="aspect-video h-36 rounded shadow"
              src="https://via.placeholder.com/500x350"
            />
            <img
              className="aspect-video h-36 rounded shadow"
              src="https://via.placeholder.com/500x350"
            />
          </div>
        </div>

        <div className="py-2">
          <div className="flex gap-2 rounded bg-slate-200 p-3">
            <SearchOutlined
              style={{ fontSize: 20 }}
              className="text-slate-500"
            />
            <input
              className="flex-grow bg-transparent focus:outline-none"
              type="search"
              placeholder="Search for fruits, vegetables, etc..."
            />
          </div>
        </div>
      </div>

      <CategoryTab
        selectedCategory={selectedCategory}
        setSelectedCategory={changeCategory}
      />

      <div className="py-4">        
        <SubCategories isLoading={isLoading} category={categories[selectedCategory]} />
      </div>
    </>
  );
}
