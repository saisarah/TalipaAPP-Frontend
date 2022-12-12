import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";

export default function CreateInfo() {
  return (
    <div>
      <div className="mt-40 mb-14 flex justify-center">
        <img src="/assets/images/blog-post.png" />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-bold">Create Post</h1>
        <p className="">
          Farmer groups are group of individual farmers, an association,
          cooperative or any legal entity with a common farming interest.
        </p>
        <Button className="mt-2 text-lg text-[#739559]" size={"large"}>
          Create
        </Button>
      </div>
    </div>
  );
}
