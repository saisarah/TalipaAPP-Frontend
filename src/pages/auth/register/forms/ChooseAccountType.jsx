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
          className="absolute z-20 text-white"
          icon={<LeftOutlined style={{ fontSize: "24px" }} />}
        />
      </Link>
      <button
        onClick={() => setAccountType("vendor")}
        className="relative grid flex-shrink-0 flex-grow place-content-center"
      >
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={vendorImg}
        />
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
        <span className="relative z-10 text-3xl font-bold text-white">
          Farmer
        </span>
      </button>
    </div>
  );
}
