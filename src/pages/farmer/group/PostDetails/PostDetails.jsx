import {
  ArrowLeftOutlined,
  SearchOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Link } from "react-router-dom";
import PageHeader from "../../../../components/PageHeader";
function OtherUser({ profileName, src, postDate, description, time }) {
  return (
    <>
      <div className="flex flex-row">
        <img src="/assets/images/ex-profile.png" className="ml-2 mr-4 w-12" />
        <div>
          <h1 className="font-bold leading-tight">{profileName}</h1>
          <span className="text-[#6E6D76]">{time}</span>
        </div>
      </div>
      <div className="mx-2 pl-16">
        <h1>{postDate}</h1>
        <p>{description}</p>
      </div>
    </>
  );
}

function User({ profileName, src, postDate, description, time }) {
  return (
    <>
      <div className="flex flex-row">
        <img src="/assets/images/ex-profile.png" className="ml-2 mr-4 w-12" />
        <div>
          <h1 className="font-bold leading-tight">{profileName}</h1>
          <span className="text-slate-400">{time}</span>
        </div>
      </div>
      <div className="mx-2">
        <h1>{postDate}</h1>
        <p>{description}</p>
        <img src={src} alt="farmer's-profile" className="w-full" />
      </div>
    </>
  );
}
export function PostDetails() {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-slate-50">
      <PageHeader
        left={
          <Link to="/farmer/home">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Sarah Oben's Post"
      />
      <div className=" mt-2 flex flex-col gap-2 bg-white py-4">
        <User
          profileName="Sarah Oben"
          time="2 hours ago"
          src="/assets/images/product.png"
          postDate="Looking for mangang kalabaw 2000 pieces"
          description="Lapag lang po kayo mga manggang kalabaw ninyo at ating pag-usapan yan."
        />
        <div className="mx-2 flex gap-2">
          <TagOutlined style={{ fontSize: "22px" }} />
          <Button className="bg-[#979797]">Banana</Button>
          <Button className="border-hidden bg-transparent">Selling</Button>
        </div>
      </div>
      <div className="mx-2 mt-2 flex flex-col gap-2 bg-white py-4">
        <OtherUser
          profileName="Joshua Villanueva"
          time="5 hours ago"
          description="Meron ako rito madaam 1k pieces nga lang."
        />
      </div>
      <div className="mx-2 mt-2 flex flex-col gap-2 bg-white py-4">
        <OtherUser
          profileName="Jhunriz Lalata"
          time="2 hours ago"
          description="Up."
        />
      </div>
      <div className="mx-2 mt-2 flex flex-col gap-2 bg-white py-4">
        <OtherUser
          profileName="Ruel Almonia"
          time="5 minutes ago"
          description="Pm madaam sa presyo."
        />
      </div>
      <div className="mx-2 mt-2 bg-white pb-10">
        <TextArea rows={4} placeholder="Leave a comment" className="border-none" />
        <Button type="Primary" className="bg-[#739559] text-white float-right ">Comment</Button>
      </div>
    </div>
  );
}
