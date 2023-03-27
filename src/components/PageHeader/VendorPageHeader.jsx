import { useVendorContext } from "@/contexts/VendorContext";
import { Avatar } from "antd";
import { BackLink } from "./components/BackLink";

export default function VendorPageHeader({ title, left, back, onBack }) {
  return (
    <div className="lg:hidden sticky top-0 z-10 grid h-16 flex-shrink-0 grid-cols-12 items-center bg-white px-4 shadow-sm">
      <div className="col-span-2">{back ? <BackLink to={back} onBack={onBack} /> : left}</div>
      <div className="col-span-8 text-center">
        <span className="text-2xl font-bold">{title}</span>
      </div>
    </div>
  );
}
