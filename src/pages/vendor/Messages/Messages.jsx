import Threads from "@/components/messages/Threads";
import { Outlet } from "react-router-dom";


export default function Messages()
{
  return (
    <div className="flex flex-grow flex-col md:p-4">
      <Threads threadLink={(id) => `/messages/${id}`}>
        <Outlet/>
      </Threads>
    </div>
  );
}