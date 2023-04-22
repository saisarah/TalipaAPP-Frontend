import { fetchGroupPostComments } from "@/apis/FarmerGroupApi";
import Http, { getErrorMessage } from "@/helpers/Http";
import { SendOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { App, Button, Input } from "antd";
import { useState } from "react";

const addPostComment = async(post_id, content) => {
  const { data } = await Http.post(`/farmer-group/posts/${post_id}/comments`, { content })
  return data
}

const useAddPostComment = (post_id, option = {}) => {
  const queryClient = useQueryClient()
  return useMutation(
    (comment) => addPostComment(post_id, comment),
    {
      ...option,
      onSuccess(data) {
        queryClient.invalidateQueries(fetchGroupPostComments.key(post_id))
        option?.onSuccess(data)
      }
    }
  )
}

export default function WriteComment({ post_id }) {
  const { notification } = App.useApp()
  const [comment, setComment] = useState("")
  const { mutate, isLoading } = useAddPostComment(post_id, {
    onSuccess() {
      setComment("")
    },
    onError(err) {
      notification.error({ message: getErrorMessage(err) })
    }
  })

  const handleSubmit = () => {
    if (isLoading) return
    mutate(comment)
  }

  return (
    <div className="flex-shrink-0 bg-white p-2 shadow">
      <div className="flex overflow-hidden rounded-full border bg-[#EFF3F4] pl-2">
        <Input
          className="text-base text-[#0F141A] placeholder:text-[#536471]"
          bordered={false}
          size="large"
          placeholder="Write comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
          onPressEnter={handleSubmit}
        />
        <Button
          loading={isLoading}
          onClick={handleSubmit}
          icon={<SendOutlined className="text-primary" />}
          className="border-none"
          type="link"
          size="large"
        />
      </div>
    </div>
  );
}
