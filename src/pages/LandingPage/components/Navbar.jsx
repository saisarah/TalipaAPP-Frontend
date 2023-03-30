import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/TalipaApp LogIn.svg";
export default function Navabar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className=" relative z-30 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* <!-- Logo --> */}
          <Link className="flex-shrink-0">
            <img className="h-[55px] w-[130px]" src={logo} alt="Logo" />
          </Link>

          {/* <!-- Navigation links --> */}
          <div className="">
            <div className="j ml-10 flex items-baseline space-x-4 font-bold">
              <div className="hidden md:block">
                <ul className="flex justify-between gap-4">
                  <li className=" px-3  text-sm font-bold text-black">
                    <a href="#Home">Home</a>
                  </li>
                  <li className=" px-3  text-sm font-bold text-black">
                    <a href="#About">About</a>
                  </li>
                  <li className=" px-3  text-sm font-bold text-black">
                    <a href="#Services">Services</a>
                  </li>
                  <li className=" px-3  text-sm font-bold text-black">
                    <a href="#Contact">Contact</a>
                  </li>
                </ul>
              </div>
              <a href="/login">
                <button className=" rounded-sm bg-[#333333] p-1 pl-6 pr-6 text-center text-white">
                  Sign in
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
