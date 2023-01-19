import {
  useTitle,
  VendorLayoutContext,
} from "@/components/VendorLayout/VendorLayout";
import ForSale from "@/pages/farmer/Feed/ForSale";
import { useContext, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

export const Home = () => {
  const [params] = useSearchParams();
  const { title, setTitle } = useContext(VendorLayoutContext);
  const feed = params.get("feed");
  const defaultActive = "sale";

  const active = (tab) => {
    if (tab === feed) return true;
    if ((tab === defaultActive) & (feed != "demands") && feed != "create")
      return true;
    return false;
  };

  useTitle("Home");

  return (
    <div>
      <div className="grid h-16 grid-cols-3 bg-white text-lg shadow-md">
        <Link
          to="?feed=sale"
          className={`flex items-center justify-center ${
            active("sale") ? "border-b border-primary text-primary" : ""
          }`}
        >
          For Sale
        </Link>

        <Link
          to="?feed=demands"
          className={`flex items-center justify-center ${
            active("demands") ? "border-b border-primary text-primary" : ""
          }`}
        >
          Demands
        </Link>

        <Link
          to="?feed=create"
          className={`flex items-center justify-center ${
            active("create") ? "border-b border-primary text-primary" : ""
          }`}
        >
          Create Post
        </Link>
      </div>

      {active("sale") && <ForSale />}
    </div>
  );
};
