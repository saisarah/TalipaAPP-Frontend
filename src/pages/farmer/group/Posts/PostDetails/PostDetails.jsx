import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import Http from "@/helpers/Http";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { GroupPostCard } from "../components/GroupPostCard";
import CommentItem from "./components/CommentItem";
import LoadingPost from "./components/LoadingPost";
import WriteComment from "./components/WriteComment";

const fetchGroupPost = async(post_id) => {
  const { data } = await Http.get(`/farmer-group/posts/${post_id}`)
  return data
}

const fetchGroupPostComments = async (post_id) => {
  const { data } = await Http.get(`/farmer-group/posts/${post_id}/comments`)
  return data
}

const useGroupPost = (post_id, option) => {
  return useQuery(
    ["farmer-group", "posts", post_id],
    () => fetchGroupPost(post_id),
    option
  )
}

const useGroupPostComments = (post_id, option) => {
  return useQuery(
    ["farmer-group", "posts", post_id, "comments"],
    () => fetchGroupPostComments(post_id),
    option
  )
}

export default function PostDetails() {
  const { id } = useParams()
  const isLoading = false;

  return (
    <div>
      <FarmerPageHeader title="Group Post" back="/farmer/groups" />
      {isLoading ? (
        <LoadingPost />
      ) : (
        <div className="sm:p-3">
          <GroupPostCard
            author={{
              fullname: "Lenard Mangay-ayam",
              profile_picture:
                "https://avatars.dicebear.com/api/initials/john+doe.svg",
            }}c
            created_at={Date()}
            description="lorem ipsum"
            id={1}
          />
          <div className="flex flex-col bg-white gap-3 py-3 sm:border sm:border-slate-300 sm:border-t-0">
            <CommentItem />
            <CommentItem />
            <CommentItem />
          </div>
          <WriteComment post_id={id}/>
        </div>
      )}
    </div>
  );
}