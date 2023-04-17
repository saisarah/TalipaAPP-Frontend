import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import {
  LockOutlined,
  PhoneOutlined,
  SearchOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";

export default function Help() {
  return (
    <Page>
      <PageHeader title="TalipaAPP Help Center" back="/" />
      <div className="my-2 bg-white">
        <div className="mx-4 flex grow flex-col p-2">
          <div className="text-xl font-bold">
            <p>Self-Service</p>
          </div>

          <div className="flex-cols-2 mx-auto -ml-0.5 flex items-center gap-4 pb-4 font-bold">
            <SearchOutlined className="text-4xl" />
            <button>Track Order</button>
            <LockOutlined className="mx-1 -ml-1.5 pl-20 text-4xl" />
            <button>Change Password</button>
          </div>

          <div className="flex-cols-2 mx-auto -ml-0.5 flex items-center gap-4 font-bold">
            <PhoneOutlined className="text-4xl" />
            <button className="text-left">
              Change Phone
              <br />
              Number
            </button>
            <UserDeleteOutlined className="mx-1 ml-14 text-4xl " />
            <button className="">Delete Account</button>
          </div>
        </div>
      </div>

      <div className=" bg-white">
        <div className="flex grow pt-2 pr-2 pb-1 pl-3.5 text-xl font-bold">
          <div>Hot Questions</div>
        </div>

        <div className="mx-4 pb-2">
          <div className="pt-2 pb-2">
            <button>Welcome To TalipaAPP: A new guide for buyers.</button>
          </div>

          <div className="pb-2">
            <button>How do i track my order?</button>
          </div>

          <div className="pb-2">
            <button>Why can't i return my order?</button>
          </div>

          <div className="pb-2">
            <button>What is the order received button?</button>
          </div>

          <div className="pb-2">
            <button>Why can't i change my mobile number?</button>
          </div>

          <div className="pb-2">
            <button>TalipaAPP Money Back Guarantee</button>
          </div>

          <div className="pb-2">
            <button>I need help with my order</button>
          </div>
        </div>
      </div>

      <div className="my-2 bg-white">
        <div className="flex grow pt-2 pr-2 pb-1 pl-3.5 text-xl font-bold">
          <div>Do You Have Any Other Question?</div>
        </div>

        <div className="flex">
          <div className="flex items-center justify-center overflow-hidden rounded-full">
            <img src="/assets/images/chat.png" className="w-13 h-12 p-3.5" />
            <button>Chat</button>
          </div>
        </div>
      </div>
    </Page>
  );
}
