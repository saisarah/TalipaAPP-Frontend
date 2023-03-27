import PageHeader from "@/components/PageHeader/PageHeader";
import {
  ArrowLeftOutlined,
  LikeFilled,
  SearchOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { Avatar, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Link } from "react-router-dom";
function OtherUser({ profileName, src, postDate, description, time }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
          <Avatar className="ml-2 mr-2 h-10 w-10 border-2 border-green-600" />
          <div className="flex flex-grow flex-col ">
            <div className="mr-4 flex justify-between">
              <span className="font-bold leading-tight">{profileName}</span>
              <LikeFilled />
            </div>
            <span className="text-[#6E6D76]">{time}</span>
          </div>
        </div>
        <div className="mx-14">
          <span>{postDate}</span>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

function User({ profileName, src, postDate, description, time }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="mx-4 flex">
          <Avatar className="mr-2 mb-2 h-10 w-10 border-2 border-green-600" />
          <div className="flex flex-col">
            <span className="font-bold leading-tight">{profileName}</span>
            <span className="text-slate-400">{time}</span>
          </div>
        </div>
        <div className="mx-6 pb-0 leading-tight">
          <span className="font-bold">{postDate}</span>
          <p>{description}</p>
        </div>
        <img src={src} alt="farmer's-profile" className="w-full" />
      </div>
    </>
  );
}
export function PostDetails() {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-slate-50">
      <PageHeader back="/farmer/groups/posts" title="Sarah Oben's Post" />
      <div className=" mt-2 flex flex-col gap-2 bg-white py-4">
        <User
          profileName="Sarah Oben"
          time="2 hours ago"
          src="/assets/images/product.png"
          postDate="Looking for mangang kalabaw 2000 pieces"
          description="Lapag lang po kayo mga manggang kalabaw ninyo at ating pag-usapan yan."
        />
        <div className="mx-4 flex gap-4">
          <TagOutlined style={{ fontSize: "30px" }} />
          <Button className="rounded-md bg-[#979797] text-sm text-white">
            Banana
          </Button>
          <Button className="border-hidden bg-transparent text-sm">
            Selling
          </Button>
        </div>
      </div>
      <div className="mx-2 mt-2 flex flex-col bg-white py-4 shadow">
        <OtherUser
          profileName="Joshua Villanueva"
          time="5 hours ago"
          description="Meron ako rito madaam 1k pieces nga lang."
        />
      </div>
      <div className="mx-2 mt-2 flex flex-col bg-white py-4 shadow">
        <OtherUser
          profileName="Jhunriz Lalata"
          time="2 hours ago"
          description="Up."
        />
      </div>
      <div className="mx-2 mt-2 flex flex-col bg-white py-4 shadow">
        <OtherUser
          profileName="Ruel Almonia"
          time="5 minutes ago"
          description="Pm madaam sa presyo."
        />
      </div>
      <div className="mx-2 mt-2 bg-white pb-10">
        <TextArea
          rows={4}
          placeholder="Leave a comment"
          className="border-none"
        />
        <Button
          type="Primary"
          className="float-right rounded-md border bg-[#739559] text-white"
        >
          Comment
        </Button>
      </div>
    </div>
  );
}
