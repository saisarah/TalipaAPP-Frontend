import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import farmerImg from "../images/farmer.png";
import vendorImg from "../images/vendor.png";

export default function ChooseAccountType({ setAccountType }) {
  return (
    <div className="flex h-screen flex-col">
      <Link to="/login">
        <Button
          type="link"
          className="absolute z-20 text-white hover:text-black"
          icon={<LeftOutlined style={{ fontSize: "24px" }} />}
        />
      </Link>
      <button
        onClick={() => setAccountType("vendor")}
        className="relative grid flex-shrink-0 flex-grow place-content-center"
      >
        <img
          className="absolute inset-0 h-full w-full  object-cover  "
          src={vendorImg}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#739559] to-transparent duration-500 hover:opacity-0"></div>

        <span className="relative z-10 text-3xl font-bold text-white">
          Vendor
        </span>
      </button>
      <button
        onClick={() => setAccountType("farmer")}
        className="relative grid flex-shrink-0 flex-grow place-content-center"
      >
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={farmerImg}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#739559] duration-500 hover:opacity-0"></div>

        <span className="relative z-10 text-3xl font-bold text-white">
          Farmer
        </span>
      </button>
    </div>
  );
}
