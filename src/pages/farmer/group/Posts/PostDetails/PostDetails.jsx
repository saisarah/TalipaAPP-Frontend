import { fetchGroupPostComments } from "@/apis/FarmerGroupApi";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import Spinner from "@/components/Spinner";
import Http from "@/helpers/Http";
import { useFarmerGroupPostsCommentCreated } from "@/hooks/listeners/useFarmerGroupPostsCommentCreated";
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



const useGroupPost = (post_id, option) => {
  return useQuery(
    ["farmer-group", "posts", post_id],
    () => fetchGroupPost(post_id),
    option
  )
}

const useGroupPostComments = (post_id, option) => {
  return useQuery(
    fetchGroupPostComments.key(post_id),
    () => fetchGroupPostComments(post_id),
    option
  )
}

export default function PostDetails() {
  const { id } = useParams()
  const { data, isLoading, isSuccess } = useGroupPost(id)
  const { data:comments, isLoading: fetchingComments } = useGroupPostComments(id, {
    enabled: isSuccess
  })

  useFarmerGroupPostsCommentCreated(id)

  return (
    <div>
      <FarmerPageHeader title="Group Post" back="/farmer/groups" />
      {isLoading ? (
        <LoadingPost />
      ) : (
        <div className="sm:p-3">
          <GroupPostCard {...data}/>
          <div className="flex flex-col bg-white gap-3 py-3 sm:border sm:border-slate-300 sm:border-t-0">
            {fetchingComments 
              ? <Spinner tip="Fetching comments" />
              : comments.map(comment => <CommentItem key={comment.id} {...comment} />)
            }
          </div>
          <WriteComment post_id={id}/>
        </div>
      )}
    </div>
  );
}