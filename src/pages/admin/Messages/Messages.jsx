import Threads from "@/components/messages/Threads";
import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import { Outlet } from "react-router-dom";


export default function Messages()
{
  return (
    <div className="flex flex-grow flex-col md:p-4 ">
      <FarmerPageHeader back="/farmer" title="Messages" />
      <Threads threadLink={(id) => `/farmer/messages/${id}`}>
        <Outlet />
      </Threads>
    </div>
  );
}