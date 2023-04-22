import { fetchGroupPosts } from "@/apis/FarmerGroupApi";
import { useAppContext } from "@/contexts/AppContext";
import Http, { getErrorMessage } from "@/helpers/Http";
import { LikeFilled, LikeOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { App, Button } from "antd";

const likeGroupPost = async (post_id) => {
  const { data } = await Http.post(`/farmer-group/posts/${post_id}/likes`);
  return data;
};

const unlikeGroupPost = async (post_id) => {
  const { data } = await Http.delete(`/farmer-group/posts/${post_id}/likes`);
  return data;
};

const useLikeGroupPost = (post_id) => {
  const { notification } = App.useApp();
  const queryClient = useQueryClient();

  return useMutation(() => likeGroupPost(post_id), {
    onSuccess(data) {

      queryClient.setQueryData(fetchGroupPosts.key(), (posts) => {
        return posts.map(post => {
          if (post.id == post_id)
            return {
              ...post,
              likers: data
            }

          return post
        })
      })

      queryClient.setQueryData(
        ["farmer-group", "posts", parseInt(post_id)],
        (post) => {
          return {
            ...post,
            likers: data,
          };
        }
      );
    },
    onError(err) {
      notification.error({ message: getErrorMessage(err) });
    },
  });
};

const useUnlikeGroupPost = (post_id) => {
  const { notification } = App.useApp();
  const queryClient = useQueryClient();

  return useMutation(() => unlikeGroupPost(post_id), {
    onSuccess(data) {
      queryClient.setQueryData(
        ["farmer-group", "posts", parseInt(post_id)],
        (post) => {
          return {
            ...post,
            likers: data,
          };
        }
      );

      queryClient.setQueryData(fetchGroupPosts.key(), (posts) => {
        return posts.map(post => {
          if (post.id == post_id)
            return {
              ...post,
              likers: data
            }

          return post
        })
      })
    },
    onError(err) {
      notification.error({ message: getErrorMessage(err) });
    },
  });
};

export default function LikePostButton({ likers, id }) {
  const { mutate: likePost, isLoading: likingPost } = useLikeGroupPost(id);
  const { mutate: unlikePost, isLoading: unlikingPost } = useUnlikeGroupPost(id);
  const { userID } = useAppContext()
  const isLike = likers.some(liker => liker.farmer_id === userID)

  const handleLike = () => {
    if (likingPost) return;
    likePost()
  }

  const handleUnlike = () => {
    if (unlikingPost) return;
    unlikePost()
  }

  if (!isLike)
    return (
      <Button
        loading={likingPost}
        onClick={handleLike}
        size="large"
        type="link"
        icon={<LikeOutlined />}
      />
    );

    return (
      <Button
        loading={unlikingPost}
        onClick={handleUnlike}
        size="large"
        type="link"
        icon={<LikeFilled />}
      />
    );
}
