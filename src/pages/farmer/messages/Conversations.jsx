import { SearchOutlined } from "@ant-design/icons";
import PageHeader from "@/components/PageHeader";
import Page from "@/components/Page";

function Messages({ user, displayphoto }) {
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

export default function Conversations() {
  return (
    <Page className="bg-slate-50">
      <PageHeader back="/farmer" title="Conversations" />
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

      <Messages
        user="Shiella May"
        displayphoto="https://via.placeholder.com/59x59"
      />
      <Messages
        user="Paolo Ortega"
        displayphoto="https://via.placeholder.com/59x59"
      />
      <Messages
        user="At Cosco Market"
        displayphoto="https://via.placeholder.com/59x59"
      />
    </Page>
  );
}
