import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import gcashLogoImg from "./images/gcash.png";
import paypalImg from "./images/paypal.svg";

const methods = [
  { logo: gcashLogoImg, state: "gcash", label: "GCash" },
  { logo: paypalImg, state: "paypal", label: "PayPal" },
];

export default function ChooseMethod({ to, ...props }) {
  return (
    <div {...props}>
      {methods.map((method) => (
        <Link
          key={method.state}
          to={to}
          className="flex items-center gap-4 border-b border-slate-100 bg-white p-4 text-black"
          state={method.state}
        >
          <img src={method.logo} className="h-8 w-8 rounded" />
          <div className="flex-grow text-lg">{method.label}</div>
          <RightOutlined />
        </Link>
      ))}
    </div>
  );
}
