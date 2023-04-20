import { RegisterContextProvider } from "@/contexts/RegistrationContext";
import { useState } from "react";
import ChooseAccountType from "./forms/ChooseAccountType";
import RegistrationForm from "./RegistrationForm";
import { Button } from "antd";
import { ArrowLeftOutlined, LeftOutlined } from "@ant-design/icons";
import forlogin from "./images/forlogin.png";
import logo from "./images/tali.svg";
import farmer from "./images/farmer.png";
import vendor from "./images/vendor.png";
import { Link } from "react-router-dom";

export default function Register() {
  const [accountType, setAccountType] = useState(null);

  return (
    <>
      <div className=" grid h-screen grid-cols-1 overflow-hidden  md:grid-cols-3 ">
        <div
          className="relative col-span-2 hidden overflow-hidden p-10 md:block "
          style={{
            backgroundImage:
              accountType === "farmer"
                ? `url(${farmer})`
                : accountType === "vendor"
                ? `url(${vendor})`
                : `url(${forlogin})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 0.5s ease-in-out",
          }}
        >
          <div className="mt-20 max-w-xl font-poppins text-4xl font-semibold text-white">
            {accountType === "farmer"
              ? "Welcome, Farmer! Our platform makes it easy to sell your local commodities with ease."
              : accountType === "vendor"
              ? "Welcome, Vendor! Browse commodities easily and enjoy prompt delivery."
              : "Digital Platform Connecting Farmers and Vendors"}
          </div>
        </div>

        <div className="relative col-span-1 overflow-scroll overflow-x-hidden bg-white  text-center ">
          <div className="flex text-center">
            <div className=" flex-grow">
              <RegisterContextProvider accountType={accountType}>
                <div className=" bg-white">
                  {accountType === null ? (
                    <>
                      <Link to="/login">
                        <Button
                          type="link"
                          className=" absolute left-4 top-2 z-40 text-black hover:text-black"
                          icon={
                            <ArrowLeftOutlined style={{ fontSize: "15px" }} />
                          }
                        />
                      </Link>
                      <div className="o relative flex flex-col gap-10 px-10 py-10 md:px-20">
                        <img className="mx-auto ml-1 mt-5" src={logo} alt="" />
                        <p className="mb-5 text-left font-poppins text-lg font-semibold">
                          Choose your account type 👆🏻
                        </p>
                        <ChooseAccountType setAccountType={setAccountType} />
                      </div>
                      <div className="absolute bottom-0 right-0 left-0">
                        © <span className="text-[#86BF88]">Talipa</span>
                        App2023 All rights reserved
                      </div>
                    </>
                  ) : (
                    <RegistrationForm
                      accountType={accountType}
                      reset={() => setAccountType(null)}
                    />
                  )}
                </div>
              </RegisterContextProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
