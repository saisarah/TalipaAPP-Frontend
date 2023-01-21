import { Link } from "react-router-dom";
import PageHeader from "@/pages/farmer/components/PageHeader";
import { ArrowLeftOutlined, SearchOutlined } from "@ant-design/icons";
import { useTitle } from "@/components/VendorLayout/VendorLayout";

function MessagesItem({ user, displayphoto }) {
  return (
    <div className="">
      <div className="">
        <div className="m-2 border-b">
          <ul className="">
            <li className="">
              <a href="#" className="flex w-full items-center gap-2">
                <span className="">
                  <img className="rounded-full" src={displayphoto} alt="" />
                </span>
                <div className="flex h-full flex-grow flex-col leading-4">
                  <span className="text-xl font-bold">{user}</span>
                  <span className="">No unread messages</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export const Messages = () => {
  useTitle("Messages");

  return (
    <div className="mx-auto max-w-md bg-slate-50">
      <div className="py-2 px-4">
        <div className="flex gap-2 rounded bg-slate-200 p-3">
          <SearchOutlined style={{ fontSize: 20 }} className="text-slate-500" />
          <input
            className="flex-grow bg-transparent focus:outline-none"
            type="search"
            placeholder="Search for fruits, vegetables, etc..."
          />
        </div>
      </div>

      <MessagesItem
        user="Shiella May"
        displayphoto="https://via.placeholder.com/59x59"
      />
      <MessagesItem
        user="Paolo Ortega"
        displayphoto="https://via.placeholder.com/59x59"
      />
      <MessagesItem
        user="At Cosco Market"
        displayphoto="https://via.placeholder.com/59x59"
      />
    </div>
  );
};
