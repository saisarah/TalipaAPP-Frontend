import { ArrowLeftOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useState } from "react";

function Product({ setIsOpen }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-xl">
      <div className="relative h-32 bg-yellow-500">
        <Button
          type="text"
          icon={<ShoppingCartOutlined className="text-white" />}
          className="absolute top-2 right-2"
        />
        <div className="absolute bottom-0 flex w-full items-end justify-between bg-white bg-opacity-20 px-2 pt-1">
          <div
            onClick={() => setIsOpen(true)}
            className="text-lg font-semibold"
          >
            Repolyo
          </div>
          <div className="text-sm font-bold text-orange-900">₱20/kg</div>
        </div>
      </div>
      <div className="p-2">lorem ipsum dolor sit amet</div>
    </div>
  );
}

function Category({ image }) {
  return (
    <div
      className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-lg bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute bottom-0 w-full bg-slate-800 p-2 font-semibold text-white">
        Vegetables
      </div>
    </div>
  );
}

function ProductDetails({ setIsOpen }) {
  return (
    <div className="fixed inset-0 z-30 mx-auto  flex min-h-screen max-w-md flex-col bg-[#283618]">
      <div className="p-8 px-4">
        <ArrowLeftOutlined
          onClick={() => setIsOpen(false)}
          className="text-white"
        />
      </div>
      <div className="flex flex-grow flex-col overflow-hidden rounded-t-3xl bg-white">
        <img
          src="https://via.placeholder.com/500x350"
          className="aspect-video w-full"
        />

        <div className="p-4">
          <div className="text-2xl font-bold">Repolyo</div>
          <p className="mt-4 font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            error eligendi temporibus! Incidunt dignissimos eveniet aliquid sit
            voluptas quae amet esse laudantium nostrum deleniti, nemo corporis
            ipsam aliquam quia eligendi?
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomeCustomer() {
  const [isOpen, setIsOpen] = useState(true);

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

        <div className="mt-2 flex gap-4 overflow-auto">
          <Category image="https://via.placeholder.com/400x400" />
          <Category image="https://via.placeholder.com/400x400" />
          <Category image="https://via.placeholder.com/400x400" />
          <Category image="https://via.placeholder.com/400x400" />
          <Category image="https://via.placeholder.com/400x400" />
        </div>
      </div>

      <div className="mt-4">
        <div className="text-lg font-semibold">Whats on the market?</div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Product setIsOpen={setIsOpen} />
          <Product setIsOpen={setIsOpen} />
          <Product setIsOpen={setIsOpen} />
          <Product setIsOpen={setIsOpen} />
          <Product setIsOpen={setIsOpen} />
          <Product setIsOpen={setIsOpen} />
          <Product setIsOpen={setIsOpen} />
          <Product setIsOpen={setIsOpen} />
          <Product setIsOpen={setIsOpen} />
        </div>
      </div>

      {isOpen && <ProductDetails setIsOpen={setIsOpen} />}
    </div>
  );
}
