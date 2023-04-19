import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import { SendOutlined } from "@ant-design/icons";
import { Avatar, Button, Input } from "antd";
import { GroupPostCard } from "../components/GroupPostCard";
import CommentItem from "./components/CommentItem";
import LoadingPost from "./components/LoadingPost";
import WriteComment from "./components/WriteComment";

export default function PostDetails() {
  const isLoading = false;

  return (
    <div>
      <FarmerPageHeader title="Group Post" back="/farmer/groups" />
      {isLoading ? (
        <LoadingPost />
      ) : (
        <div>
          <GroupPostCard
            author={{
              fullname: "Lenard Mangay-ayam",
              profile_picture:
                "https://avatars.dicebear.com/api/initials/john+doe.svg",
            }}
            created_at={Date()}
            description="lorem ipsum"
            id={1}
          />
          <div className="flex flex-col bg-white gap-3 py-3">
            <CommentItem />
            <CommentItem />
            <CommentItem />
          </div>
          <WriteComment />
        </div>
      )}
    </div>
  );
}