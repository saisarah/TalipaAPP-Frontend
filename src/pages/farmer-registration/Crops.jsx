import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Products({ src, title }) {
  return (
    <div className="flex flex-col items-center">
      <img src={src} className="aspect-square h-auto w-full" />
      <span className="text-md text-center font-bold">{title}</span>
    </div>
  );
}

export default function Crops() {
  return (
    <div className="mx-auto min-h-screen max-w-md">
      <Link to="/farm">
        <button className="mt-8 ml-2 pb-6 text-xl">
          <LeftOutlined />
        </button>
      </Link>
      <div className="flex flex-col p-4">
        <h1 className="pb-16 text-xl font-bold">
          Fill in the information below
        </h1>
        <h1 className="pb-8 text-center">Choose the crops you grow</h1>
      </div>
      <div className="mx-4 grid grid-cols-2 gap-2">
        <Products src="/assets/images/mango.png" title="Mango" />
        <Products src="/assets/images/pineapple.png" title="Pineapple" />
        <Products src="/assets/images/banana.png" title="Banana" />
        <Products src="/assets/images/garlic.png" title="Garlic" />
        <Products src="/assets/images/onion.png" title="Onion" />
        <Products src="/assets/images/cabbage.png" title="Cabbage" />
        <Products src="/assets/images/eggplant.png" title="Egpplant" />
      </div>
    </div>
  );
}
