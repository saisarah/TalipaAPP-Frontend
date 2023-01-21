import { ArrowLeftOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { Spin, Descriptions } from "antd";

const getPost = async (id) => {
  return {
    
  }
}

export default function PostDetails() {
  const { id } = useParams();
  const { data: post, isLoading } = useQuery(["posts", id], () => getPost(id));
  const { image, caption, author, created_at } = post || {};

  return (
    <div className="mx-auto min-h-screen max-w-md  bg-slate-50">
      <PageHeader
        left={
          <Link to="/farmer/home">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Post Details"
      />

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Spin tip="Fetching posts" />
        </div>
      ) : (
        <div>
          <img
            className="aspect-video h-auto w-full object-cover"
            src={image}
          />

          <div className="border-b border-slate-200 bg-white p-4">
            <div className="flex items-center gap-4">
              <img className="h-12 w-12 rounded-full" src={author.image} />
              <div className="flex flex-grow flex-col">
                <span className="font-bold">{author.name}</span>
                <span className="text-xs">Posted {created_at}</span>
              </div>
            </div>

            <p className="mt-2 whitespace-pre-line">{caption}</p>
          </div>

          <div className="mt-4 border-y border-slate-200 bg-white p-4">
            <Descriptions
              title="Pricing Table"
              bordered
              size="small"
              column={1}
            >
              <Descriptions.Item label="Small">30PHP / kg</Descriptions.Item>
              <Descriptions.Item label="Medium">40PHP / kg</Descriptions.Item>
              <Descriptions.Item label="Large">70PHP / kg</Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      )}
    </div>
  );
}
