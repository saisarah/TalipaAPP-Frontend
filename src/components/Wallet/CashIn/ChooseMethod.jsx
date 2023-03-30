import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import gcashLogoImg from "./images/gcash.png";
import paypalImg from "./images/paypal.svg";
import buxImg from "./images/bux.png"

const methods = [
  { logo: buxImg, method: "bux", label: "Bux", title: "Cash In using Bux" },
  { logo: gcashLogoImg, method: "gcash", label: "GCash", title: "Cash In using GCash" },
  { logo: paypalImg, method: "paypal", label: "PayPal", title: "Cash In using PayPal" },
];

export default function ChooseMethod({ to, ...props }) {
  return (
    <div {...props}>
      {methods.map((method) => (
        <Link
          key={method.method}
          to={to}
          className="flex items-center gap-4 border-b border-slate-100 bg-white p-4 text-black"
          state={method}
        >
          <img src={method.logo} className="h-8 w-8 rounded" />
          <div className="flex-grow text-lg">{method.label}</div>
          <RightOutlined />
        </Link>
      ))}
    </div>
  );
}
