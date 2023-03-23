import { useVendorContext } from "@/contexts/VendorContext";
import { Avatar } from "antd";
import { BackLink } from "./components/BackLink";

export default function VendorPageHeader({ title, left, back, onBack }) {

  const { user } = useVendorContext()

  return (
    <div className="fixed top-0 z-10 right-0 left-0 grid h-16 flex-shrink-0 grid-cols-12 items-center bg-white px-4 shadow-sm lg:flex lg:justify-between lg:pl-[316px]">
      <div className="col-span-2 lg:hidden">{back ? <BackLink to={back} onBack={onBack} /> : left}</div>
      <div className="col-span-8 text-center lg:text-left">
        <span className="text-2xl font-bold">{title}</span>
      </div>
      <div className="hidden lg:flex items-center gap-2">
        <div className="text-lg">Hi! {user.firstname}</div>
        <Avatar src={user.profile_picture} />
      </div>
    </div>
  );
}
