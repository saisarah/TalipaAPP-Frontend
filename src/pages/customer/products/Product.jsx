import { ArrowLeftOutlined, HeartOutlined, MessageOutlined, ShareAltOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Rate } from "antd";
import { Link } from "react-router-dom";
import UnderConstruction from "../../../components/UnderConstruction";


export default function ()
{
  return (
    <div className="max-w-md mx-auto min-h-screen">
      <div className="w-full aspect-video bg-slate-300 p-4">
        <Link to='/'>
          <Button icon={<ArrowLeftOutlined  />} shape="circle"/>
        </Link>
      </div>
      <div className="bg-white p-4">
        <div className="text-2xl">Fresh fuji Apple</div>
        <div className="text-lg font-semibold text-primary">₱100.25</div>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <Rate disabled defaultValue={4} />
            <span className="text-xs text-slate-500">10 Sold</span>
          </div>
          <div className="flex gap-4">
            <HeartOutlined style={{fontSize:20}}/>
            <ShareAltOutlined style={{fontSize:20}} />
          </div>
        </div>
      </div>

      <div className="bg-white mt-4 p-4 flex gap-2 items-center">
        <img className="rounded-full aspect-square w-[15%]" src="https://via.placeholder.com/150" />
        <div className="flex-grow flex flex-col">
          <span className="text-lg">Ruel Almonia</span>
          <span className="font-light">Seller Ratings 90%</span>
        </div>
        <Button type="primary" shape="round">View Shop</Button>
      </div>

      <div className="bg-white mt-4 p-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum excepturi voluptatibus, eligendi animi, cupiditate, ipsa praesentium libero voluptate possimus harum rerum voluptatem vel. Animi, iusto. Pariatur eaque aut aliquam beatae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum excepturi voluptatibus, eligendi animi, cupiditate, ipsa praesentium libero voluptate possimus harum rerum voluptatem vel. Animi, iusto. Pariatur eaque aut aliquam beatae.</p>
      </div>

      <div className="items-cemter fixed bottom-0 grid grid-cols-2 w-full max-w-md bg-white shadow">

        <div className="grid grid-cols-2 items-center">
          <button className="text-xs flex flex-col py-2 items-center">
            <MessageOutlined/>
            <span>Chat Now</span>
          </button>
          <button className="text-xs flex flex-col py-2 items-center">
            <ShoppingCartOutlined/>
            <span>Add to Cart</span>
          </button>
        </div>

        <Button className="h-full" block type="primary" size="large">
          Buy Now
        </Button>
      </div>
    </div>
  )
}