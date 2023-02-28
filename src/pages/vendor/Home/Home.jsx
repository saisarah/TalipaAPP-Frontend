import { useTitle } from "@/contexts/VendorContext";
import { useTab } from "@/helpers/hooks";
import { Link } from "react-router-dom";
import ForSale from "./ForSale";

export const Home = () => {
  const { isActive } = useTab(["sale", "demands", "create"], "sale");

  useTitle("Home");

  return (
    <div>
      <div className="grid h-16 grid-cols-3 bg-white text-lg shadow-md">
        <Link
          to="?tab=sale"
          className={`flex items-center justify-center ${
            isActive("sale") ? "border-b border-primary text-primary" : ""
          }`}
        >
          For Sale
        </Link>

        <Link
          to="?tab=demands"
          className={`flex items-center justify-center ${
            isActive("demands") ? "border-b border-primary text-primary" : ""
          }`}
        >
          Demands
        </Link>

        <Link
          to="?tab=create"
          className={`flex items-center justify-center ${
            isActive("create") ? "border-b border-primary text-primary" : ""
          }`}
        >
          Create Post
        </Link>
      </div>

      {isActive("sale") && <ForSale />}
    </div>
  );
};
