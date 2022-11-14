import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../../contexts/AppContext";
import Category from "./Category";
import Product from "./Product";
import ProductDetails from "./ProductDetails";



export default function HomeCustomer() {
  const { isLogin } = useContext(AppContext)
  const [isOpen, setIsOpen] = useState(false);

  if (!isLogin) {
    return <Navigate to="/login" />
  }

  return (
    <div className="p-4">
      <div className="text-2xl font-bold">Welcome DoSan!</div>
      <div className="text-2xl font-bold">
        Let's find <span className="text-orange-700">Fresh</span> Crops.
      </div>

      <div className="mt-8 rounded-xl bg-[#283618] p-4 text-white">
        <div className="font-bold">
          Get your first
          <br />
          Transaction 20% off.
        </div>
        <button className="mt-8 rounded-full bg-white px-8 py-2 text-sm font-bold text-slate-900">
          Show Now
        </button>
      </div>

      <div className="mt-4">
        <div className="text-lg font-semibold">Categories</div>

        <div className="talipaapp-scrollbar mt-2 flex gap-4 overflow-x-auto">
          <Category
            image="/assets/image/Vegetables.jpg"
            name="Vegetables"
          />
          <Category
            image="/assets/image/Fruits.jpg"
            name="Fruits"
          />
          <Category
            image="/assets/image/Crop.jpg"
            name="Crop"
          />
          <Category
            image="/assets/image/Meats.jpg"
            name="Meats"
          />
          <Category
            image="/assets/image/Eggs.jpg"
            name="Eggs"
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="text-lg font-semibold">Whats on the market?</div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Product
            setIsOpen={setIsOpen}
            image="assets/image/repolyo.jpg"
            name="Repolyo"
          />
          <Product
            setIsOpen={setIsOpen}
            image="assets/image/karots.jpg"
            name="Karots"
          />
          <Product
            setIsOpen={setIsOpen}
            image="assets/image/Brokolyo.jpg"
            name="Brokolyo"
          />
          <Product
            setIsOpen={setIsOpen}
            image="assets/image/patatas.jpg"
            name="Patatas"
          />
          <Product
            setIsOpen={setIsOpen}
            image="assets/image/luya.jpg"
            name="Luya"
          />
          <Product
            setIsOpen={setIsOpen}
            image="assets/image/sibuyas.jpg"
            name="Sibuyas"
          />
          <Product
            setIsOpen={setIsOpen}
            image="assets/image/Kamatis.jpg"
            name="Kamatis"
          />
          <Product
            setIsOpen={setIsOpen}
            image="assets/image/Bawang.jpg"
            name="Bawang"
          />

        </div>
      </div>

      <ProductDetails setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}
