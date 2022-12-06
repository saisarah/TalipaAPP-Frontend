import {
  EyeOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

function Card({ profileName, src, harvestDate }) {
  return (
    <>
      <div className="mt-4 border-b-2 border-t-2 bg-white py-2 leading-tight">
        <div className="flex flex-row">
          <img
            src="/assets/images/farmerprofile.png"
            alt="farmer's-profile"
            className="ml-2 mr-4 w-12"
          />
          <div>
            <h1 className="font-bold">{profileName}</h1>
            <span className="text-slate-400">Posted 2 days ago</span>
          </div>
        </div>
        <div className="m-2">
          <h1>{harvestDate}</h1>
          <img src={src} alt="farmer's-profile" className="w-full" />
        </div>
        <div className=" flex flex-row">
          <Button className="float-left mx-2 my-2 w-full rounded-full bg-slate-200 text-black">
            <EyeOutlined style={{ fontSize: "22px" }} />
            Edit Details
          </Button>

          <Button className="float-right mt-2 mr-2 w-full rounded-full bg-slate-200 text-black">
            <QuestionCircleOutlined style={{ fontSize: "22px" }} /> Inquire
          </Button>
        </div>
      </div>
    </>
  );
}

export default function FarmersProfile() {
  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-slate-50">
      <div className="relative">
        <img
          src="/assets/images/farmerwallpaper.png"
          alt="farmer's-wallpaper"
          className="w-full"
        />
        <img
          src="/assets/images/farmerprofile.png"
          alt="farmer's-profile"
          className="absolute bottom-10 top-20 left-0 ml-2"
        />
        <Button className="float-right mt-2 mr-2 rounded-full bg-green-900 text-white">
          Edit Profile
        </Button>
      </div>
      <div className="ml-2 pt-2 text-lg leading-tight">
        <h1 className="font-bold ">Kuya Blast Farm Land</h1>
        <span className="text-slate-400">Blast Ababa</span>
      </div>
      <div className="mx-2 mt-4 rounded-lg border-2 border-solid bg-white py-2">
        <img
          src="/assets/images/map_icon.png"
          alt="map_icon"
          className="float-left ml-2 mr-2 w-20"
        />
        <div className="mx-2 text-lg leading-tight">
          <h1>Phase 3 Package 3 Bs Caloocan City</h1>
          <span className="text-slate-400">500 successful transactions</span>
        </div>
      </div>
      <div className="mx-2 my-4 flex w-full flex-row gap-6 border-b-4">
        <Button type="text" className="text-base font-medium">
          <a href="#"> Post</a>
        </Button>
        <Button type="text" className="text-base font-medium">
          <a href="#"> Profile</a>
        </Button>
        <Button type="text" className="text-base font-medium">
          <a href="#"> Gallery</a>
        </Button>
      </div>
      <Card
        profileName="Juan Dela Cruz"
        src="/assets/images/product.png"
        harvestDate="Harvesting Date: June 07, 2022."
      />
      <Card
        profileName="Juan Dela Cruz"
        src="/assets/images/product2.jpg"
        harvestDate="Harvesting Date: November 30, 2022."
      />
    </div>
  );
}
