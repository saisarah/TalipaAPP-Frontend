import UnderConstruction from "../../../components/UnderConstruction";
import {
  SettingOutlined,
  UserOutlined,  
  DropboxOutlined,
  
  
  

} from "@ant-design/icons";
import { Badge } from "antd";
import { Link } from "react-router-dom";


export default function Account()
{
  
  return (
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"></link>
    
    <div className="bg-white px-4">
      <div className="flex items-center justify-between py-4">
        <h1 className="text-xl font-bold">Profile</h1>
        <div className="space-x-4">
          <Link to='/account'>
            <SettingOutlined style={{ fontSize: 24 }} />
          </Link>
        </div>
      </div>

      <div className="pt-2 flex bg-white px-4 py-5 top-0">
        <button className="whitespace-nowrap bg-white px-4 py-2 text-primary">
          <UserOutlined style={{ fontSize:40, borderRadius: 72 }}/>
        </button>
        <button className="whitespace-nowrap border-b-2 font-bold border-white px-4 py-2">
          Juan Dela Cruz
        </button>
      </div>

      <div className="grid grid-cols-4 py-5">
        <div className="text-center">
          <span className="text-base font-bold">0.00</span>
          <p className="text-sm">Balance</p>
        </div>
        <div className="text-center">
          <span className="text-base font-bold">0</span>
          <p className="text-sm">Cart</p>
        </div>
        <div className="text-center">
          <span className="text-base font-bold">5</span>
          <p className="text-sm">Likes</p>
        </div>
        <div className="text-center">
          <span className="text-base font-bold">132</span>
          <p className="text-sm">Recently view</p>
        </div>
      </div>
    </div>
    <br />
    <div className="bg-white p-4">
      <div className="flex items-center border-b-2 justify-between py-0">
        <p className="text-base font-bold">My orders</p>
        <div className="space-x-4">
          <Link to='/account'>
            <p>View all <span className="font-bold">></span></p>
            {/* <RightOutlined/> */}
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-4 py-5 text-center">
        <Link to='/'>
          <Badge count={2}>
            <span className="text-base font-bold"><i className="text-2xl bi bi-cash"></i></span>
            <p className="text-sm">To pay</p>
          </Badge>
        </Link>
        <Link to='/'>
          <span className="text-base font-bold"><i className="text-2xl bi bi-truck"></i></span>
          <p className="text-sm">To ship</p>
        </Link>
        <Link to='/'>
          <Badge count={3}>
            <span className="text-base font-bold"><i className="text-2xl bi bi-arrow-down-up"></i></span>
            <p className="text-sm">To review</p>
          </Badge>
        </Link>
        <Link to='/'>
          <span className="text-base font-bold"><i className="text-2xl bi bi-arrow-clockwise"></i></span>
          <p className="text-sm">Refund</p>
        </Link>
      </div>
    </div>
    <br />
    <div className="bg-white p-4">
      <p className="text-right">11-15</p>
      <div className="grid grid-cols-5">
        <div>
          <DropboxOutlined className="text-primary" style={{fontSize :40}}/>
        </div>
        <div className="col-span-4">
          <p>Your packaged has been delivered and is being sent to the next destination</p>
        </div>
      </div>
    </div>
    <br />
    <div className="bg-white p-4">
      <div className="flex items-center border-b-2 justify-between py-0">
        <p className="text-base font-bold">Other services</p>
        <div className="space-x-4">
          <Link to='/account'>
            <p>View all <span className="font-bold">></span></p>
            {/* <RightOutlined/> */}
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 py-5 text-center">
        <Link to='/'>
          <span className="text-base font-bold"><i className="text-2xl bi bi-star-fill"></i></span>
          <p className="text-sm">Reviews</p>
        </Link>
        <Link to='/'>
          <span className="text-base font-bold"><i className="text-2xl bi bi-receipt"></i></span>
          <p className="text-sm">Receipt</p>
        </Link>
        <Link to='/'>
          <span className="text-base font-bold"><i className="text-2xl bi bi-question-square-fill"></i></span>
          <p className="text-sm">Help</p>
        </Link>
        <Link to='/'>
          <span className="text-base font-bold"><i className="text-2xl bi bi-three-dots"></i></span>
          <p className="text-sm">More</p>
        </Link>
      </div>
    </div>
    </>
  )
}