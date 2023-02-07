import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Input } from "antd";

export default function Help() {
  return (
    <Page>
      <PageHeader title="TalipaAPP Help Center" back="/"/>
      <div className="my-2 bg-white">
        <div className="mx-4 flex grow pt-2">
          <Input
            type="text"
            className="rounded-lg "
            placeholder="Search for topics, questions..."
            suffix={<SearchOutlined />}
          />
        </div>

        <div className="mx-4 flex grow flex-col p-2">
          <div className=" text-xl font-bold">
            <p>Self-Service</p>
          </div>

          <div className="flex-cols-2 mx-4 flex items-center gap-4 pb-4 font-bold">
            <img src="/assets/images/track.png" className="h-20 w-20 " />
            <span>Track Order</span>
            <img src="/assets/images/changepass.png" className="h-20 w-20 " />
            <span>Track Order</span>
          </div>
          <div className="flex-cols-2 mx-4 flex items-center gap-4 font-bold">
            <img src="/assets/images/changenumber.png" className="h-20 w-20 " />
            <span>Track Order</span>
            <img src="/assets/images/delete.png" className="h-20 w-20 " />
            <span>Track Order</span>
          </div>
        </div>
      </div>

      <div className=" bg-white">
        <div className="flex grow p-2 text-xl font-bold">
          <p>Hot Questions</p>
        </div>
        <div className="mx-4 pb-2">
          <div className="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div className="my-2 bg-white">
        <div className="flex grow p-2 text-xl font-bold">
          <p>Do You Have Any Other Question?</p>
        </div>
      </div>

      <div className="my-2 bg-white">
        <div className="my-4 flex">
          <div className="flex items-center">
            <Avatar className="m-2 " />
            <p className="text-lg"> Chat</p>
          </div>
        </div>
      </div>
    </Page>
  );
}
