import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import farmerImg from "../images/farmer.png";
import vendorImg from "../images/vendor.png";

export default function ChooseAccountType({ setAccountType }) {
  const [buttonClicked, setButtonClicked] = React.useState(false);

  function handleButtonClick() {
    setButtonClicked(true);
    const farmerBtn = document.getElementById("farmer-button");
    if (farmerBtn) {
      farmerBtn.style.display = "none";
    }
    setTimeout(() => {
      setAccountType("vendor");
    }, 1500);
  }
  function handleFarmerButtonClick() {
    setButtonClicked(true);
    const vendorBtn = document.getElementById("vendor-button");
    if (vendorBtn) {
      vendorBtn.style.display = "none";
    }
    setTimeout(() => {
      setAccountType("farmer");
    }, 1500);
  }
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
        id="vendor-button"
        onClick={handleButtonClick}
        className={`relative grid flex-shrink-0 ${
          buttonClicked ? "h-full" : "h-[50%]"
        } place-content-center transition-all duration-700 ease-in-out`}
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
        id="farmer-button"
        onClick={handleFarmerButtonClick}
        className={`relative grid flex-shrink-0 ${
          buttonClicked ? "h-screen" : "h-[50%] "
        } place-content-center transition-all duration-700 ease-in-out`}
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
