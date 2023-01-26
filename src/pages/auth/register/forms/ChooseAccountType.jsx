import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";

export default function ChooseAccountType({ setAccountType }) {
  return (
    <div className="flex h-screen flex-col bg-gray-700">
      <PageHeader
        left={
          <Link to="/login" replace>
            <img src="/assets/images/logo.png" className="h-16" />
          </Link>
        }
        title="Choose an Account Type"
      />
      <button
        onClick={() => setAccountType("vendor")}
        className="relative grid flex-shrink-0 flex-grow place-content-center"
      >
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/images/vendor.png"
        />
        <span className="relative z-10 text-xl font-bold text-white">
          Vendor
        </span>
      </button>
      <button
        onClick={() => setAccountType("farmer")}
        className="relative grid flex-shrink-0 flex-grow place-content-center"
      >
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/images/farmer.png"
        />
        <span className="relative z-10 text-xl font-bold text-white">
          Farmer
        </span>
      </button>
    </div>
  );
}
