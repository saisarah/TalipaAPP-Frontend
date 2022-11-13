import { ArrowLeftOutlined, MinusCircleOutlined, MinusOutlined, PlusCircleOutlined, PlusOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useState } from "react";

function Product({ setIsOpen, image }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-xl">
      <div className="relative h-32 bg-yellow-500">
        <img
          src={image}
          className="absolute inset-0 h-full w-full object-cover"
        />
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

  const [quantity, setQuantity] = useState(10)

  const increment = () => setQuantity(quantity => quantity + 1)
  const decrement = () => setQuantity(quantity => Math.max(quantity-1, 10))

  return (
    <div className="fixed inset-0 z-30 mx-auto flex min-h-screen max-w-md flex-col bg-[#283618]">
      <div className="p-8 px-4">
        <ArrowLeftOutlined
          onClick={() => setIsOpen(false)}
          className="text-white"
        />
      </div>
      <div className="talipaapp-scrollbar flex flex-grow flex-col overflow-y-auto  rounded-t-3xl bg-white">
        <img
          src="https://via.placeholder.com/500x350"
          className="aspect-video w-full"
        />

        <div className="flex-grow p-4">
          <div className="text-2xl font-bold">Repolyo</div>
          <p className="mt-4 font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            error eligendi temporibus! Incidunt dignissimos eveniet aliquid sit
            voluptas quae amet esse laudantium nostrum deleniti, nemo corporis
            ipsam aliquam quia eligendi? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Repellat asperiores, quia est corrupti doloribus,
            ut cupiditate autem accusamus in quis a perspiciatis eos at quaerat
            dolores? Quia ullam aliquid quidem. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Repellat asperiores, quia est corrupti
            doloribus, ut cupiditate autem accusamus in quis a perspiciatis eos
            at quaerat dolores? Quia ullam aliquid quidem.
          </p>
        </div>
        <div className="sticky bottom-0 bg-white p-4">
          <div className="flex justify-between">
            <span className="text-lg font-bold">₱{quantity*10}.00</span>
            <div className="flex items-center gap-1">
              <span onClick={decrement}><MinusCircleOutlined /></span>
              <span>{quantity}kg</span>
              <span onClick={increment}><PlusCircleOutlined /></span>
            </div>
          </div>
          <button className="mt-2 w-full rounded bg-[#606C38] px-8 py-2 text-sm font-semibold text-white">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HomeCustomer() {
  const [isOpen, setIsOpen] = useState(false);

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
          <Product
            setIsOpen={setIsOpen}
            image="https://via.placeholder.com/400x400"
          />
          <Product
            setIsOpen={setIsOpen}
            image="https://via.placeholder.com/400x400"
          />
          <Product
            setIsOpen={setIsOpen}
            image="https://via.placeholder.com/400x400"
          />
          <Product
            setIsOpen={setIsOpen}
            image="https://via.placeholder.com/400x400"
          />
          <Product
            setIsOpen={setIsOpen}
            image="https://via.placeholder.com/400x400"
          />
          <Product
            setIsOpen={setIsOpen}
            image="https://via.placeholder.com/400x400"
          />
          <Product
            setIsOpen={setIsOpen}
            image="https://via.placeholder.com/400x400"
          />
          <Product
            setIsOpen={setIsOpen}
            image="https://via.placeholder.com/400x400"
          />
          <Product
            setIsOpen={setIsOpen}
            image="https://via.placeholder.com/400x400"
          />
        </div>
      </div>

      {isOpen && <ProductDetails setIsOpen={setIsOpen} />}
    </div>
  );
}
