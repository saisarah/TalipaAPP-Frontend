import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";

export default function CreatePost() {
  return (
    <div className="mx-auto min-h-screen max-w-md  bg-slate-50">
      <PageHeader
        left={
          <Link to="/farmer">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Home"
      />
      <div>
        <div className="sticky top-0 grid h-16 grid-cols-3 bg-white text-lg shadow-md">
          <div className="flex items-center justify-center">For Sale</div>
          <div className="flex items-center justify-center">Demands</div>
          <div className="flex items-center justify-center border-b border-primary text-primary">
            Create Post
          </div>
        </div>
        <div className="mt-40 mb-14 flex justify-center">
          <img src="/assets/images/blog_post.png" />
        </div>
        <div className="text-center">
          <h1 className="text-xl font-bold">Create Post</h1>
          <p className="">
            Farmer groups are group of individual farmers, an association,
            cooperative or any legal entity with a common farming interest.
          </p>
          <Button className="text-[#739559] mt-2 text-lg" size={"large"}>Create</Button>
        </div>
      </div>
    </div>
  );
}
