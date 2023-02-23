import { Button } from "antd";
import { Link } from "react-router-dom";
import blogPostImg from "./images/blog-post.png";

export default function CreateInfo() {
  return (
    <div className="my-16">
      <div className="mb-14 flex justify-center">
        <img src={blogPostImg} />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-bold">Create Post</h1>
        <p className="">Post and Sell your products</p>
        <Link to="/farmer/posts/create">
          <Button className="mt-2 text-lg text-[#739559]" size={"large"}>
            Create
          </Button>
        </Link>
      </div>
    </div>
  );
}
