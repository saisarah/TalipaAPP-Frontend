import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { UserDeleteOutlined } from "@ant-design/icons";

export default function Help() {
  return (
    <Page>
      <PageHeader title="TalipaAPP Help Center" back="/"/>
      <div className="my-2 bg-white">
        {/* <div className="mx-4 flex grow pt-2">
          <Input
            type="text"
            className="rounded-lg "
            placeholder="Search for topics, questions..."
            suffix={<SearchOutlined />}
          />
        </div> */}

        <div className="mx-4 flex grow flex-col p-2">
          <div className="text-xl font-bold">
            <p>Self-Service</p>
          </div>

          <div className="flex-cols-2 mx-4 flex items-center gap-4 pb-4 font-bold">
            <img src="/assets/images/track.png" className="h-18 w-18 " />
            <span>Track Order</span>
            <img src="/assets/images/changepass.png" className="h-18 w-18 pl-14" />
            <span>Change Password</span>
          </div>
          <div className="flex-cols-2 mx-4 flex items-center gap-4 font-bold">
            <img src="/assets/images/changenumber.png" className="h-18 w-18" />
            <span>Change Phone Number</span>
            <UserDeleteOutlined className="pr-4 text-4xl" />
            <span>Delete Account</span>
          </div>
        </div>
      </div>

      <div className=" bg-white">
        <div className="flex grow pt-2 pr-2 pb-1 pl-3.5 text-xl font-bold">
          <div>Hot Questions</div>
        </div>

        <div className="mx-4 pb-2">

          <div className="pt-2">
            <p>
              Welcome To TalipaAPP: A new guide for buyers.
            </p>
          </div>

          <div className="">
            <p>
              How do i track my order?
            </p>
          </div>

          <div className="">
            <p>
              Why can't i return my order?
            </p>
          </div>

          <div className="">
            <p>
              What is the order received button?
            </p>
          </div>

          <div className="">
            <p>
              Why can't i change my mobile number?
            </p>
          </div>

          <div className="">
            <p>
              TalipaAPP Money Back Guarantee
            </p>
          </div>

          <div className="">
            <p>
              I need help with my order
            </p>
          </div>
        </div>
      </div>

      <div className="my-2 bg-white">
        <div className="flex grow pt-2 pr-2 pb-1 pl-3.5 text-xl font-bold">
          <div>Do You Have Any Other Question?</div>
        </div>
        
        <div className="flex">
          <div className="flex items-center justify-center rounded-full overflow-hidden">
          <img src="/assets/images/chat.png" className="h-12 w-13 p-3.5"/>
            <div>Chat</div>
          </div>
        </div>
      </div>
    </Page>
  );
}
