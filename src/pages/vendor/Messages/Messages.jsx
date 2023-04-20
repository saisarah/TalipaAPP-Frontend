import Threads from "@/components/messages/Threads";
import { Outlet } from "react-router-dom";
import { useTitle } from "@/contexts/VendorContext";

export default function Messages()
{
  useTitle("Messages")
  return (
    <div className="flex flex-grow flex-col md:p-4 h-screen -mt-16 md:pt-20">
      <Threads threadLink={(id) => `/messages/${id}`}>
        <Outlet/>
      </Threads>
    </div>
  );
}