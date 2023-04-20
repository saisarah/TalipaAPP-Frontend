import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import farmerImg from "../images/farmer.png";
import vendorImg from "../images/vendor.png";

export default function ChooseAccountType({ setAccountType }) {
  const [selected, setSelected] = React.useState("");

  function handleButtonClick() {
    setSelected("vendor");

    setTimeout(() => {
      setAccountType("vendor");
    }, 100);
  }
  function handleFarmerButtonClick() {
    setSelected("farmer");

    setTimeout(() => {
      setAccountType("farmer");
    }, 100);
  }
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={handleButtonClick}
        className="rounded border border-[#739559] p-5 font-bold  text-black duration-300 ease-in hover:border-none hover:bg-[#739559] hover:text-white"
        selected={selected === "farmer"}
      >
        Vendor
      </button>

      <button
        onClick={handleFarmerButtonClick}
        className="ease rounded bg-[#739559] p-5  font-bold text-white duration-300 hover:border hover:border-[#739559] hover:bg-transparent hover:text-black"
        selected={selected === "farmer"}
      >
        Farmer
      </button>
    </div>
  );
}
