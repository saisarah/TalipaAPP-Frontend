import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/TalipaApp LogIn.svg";
export default function Navabar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="relative z-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* <!-- Logo --> */}
          <Link className="flex-shrink-0">
            <img className="h-[55px] w-[130px]" src={logo} alt="Logo" />
          </Link>

          <div className="md:hidden">
            <button
              className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </div>

          {/* <!-- Navigation links --> */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 font-bold">
              <Link className="rounded-md px-3 py-2 text-sm font-bold text-black">
                Home
              </Link>

              <Link className="rounded-md px-3 py-2 text-sm font-bold text-black">
                About
              </Link>

              <Link className="rounded-md px-3 py-2 text-sm font-bold text-black">
                Services
              </Link>
              <Link className="rounded-md px-3 py-2 text-sm font-bold text-black">
                Help
              </Link>
              <Link className="rounded-md px-3 py-2 text-sm font-bold text-black">
                Contact
              </Link>

              <button className=" rounded-sm bg-[#333333] p-1 pl-6 pr-6 text-center text-white">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
