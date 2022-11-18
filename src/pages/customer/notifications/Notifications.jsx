import UnderConstruction from "../../../components/UnderConstruction";
import { Link } from "react-router-dom";
import {
  ArrowLeftOutlined,
  RightOutlined,
  ArrowDownOutlined,
  ShopOutlined,
  
} from "@ant-design/icons";

function Product({status, productID, transactionID, productIMG}){
  return (

    <div className="border-b-2 py-3">
    <p className="text-base font-bold">{status}</p>
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <img src={ productIMG } alt="" />
      </div>

      
      
      <div className="col-span-9">
        <p>Parcel <span className="text-primary">{ productID }</span> for your order <span className="text-primary">{ transactionID }</span> has been delivered.</p>
        <small>11/05/2022 15:26</small>
      </div>
      <div className="col-span-1">
        <ArrowDownOutlined />
      </div>
      

      

    </div>
    
    </div>
    
  );
}

export default function Notifications()
{
  return (
    <div className="max-w-md mx-auto min-h-screen">
      <div className="sticky top-0 bg-white z-10">
        <div className="bg-white px-4">
          <div className="flex items-center gap-4 py-4">
            <Link to="/" className="text-current">
              <ArrowLeftOutlined style={{ fontSize: 20 }} />
            </Link>
            <span className="text-lg font-semibold">Notification</span>
          </div>
        </div>
      </div>
      
      <div className="px-4 py-2" style={{background: "whitesmoke"}}>
        <div className="flex items-center justify-between py-0">
          <p className="text-base font-bold">Order Updates</p>
          <div className="space-x-4">
            <Link to='/'>
              <p>Read all</p>              
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white px-4">
        {/* <div className="grid grid-cols-5"> */}
          <Product status="Parcel Delivered" productID="P6120RY90BGI" transactionID="22110359AM8SJW" productIMG="https://via.placeholder.com/59x59"/>
          <Product status="Parcel Pending" productID="P6120RY90BGI" transactionID="22110359AM8SJW" productIMG="https://via.placeholder.com/59x59"/>
          <Product status="Parcel Delivered" productID="P6120RY90BGI" transactionID="22110359AM8SJW" productIMG="https://via.placeholder.com/59x59"/>
          <Product status="Parcel Pending" productID="P6120RY90BGI" transactionID="22110359AM8SJW" productIMG="https://via.placeholder.com/59x59"/>
          <Product status="Parcel Delivered" productID="P6120RY90BGI" transactionID="22110359AM8SJW" productIMG="https://via.placeholder.com/59x59"/>

        {/* </div> */}
      </div>
    </div>
  )
}