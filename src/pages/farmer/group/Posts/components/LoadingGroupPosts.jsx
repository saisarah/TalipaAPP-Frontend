import { Spin } from "antd";

export default function LoadingGroupPosts() {
  return (
    <div className="flex justify-center py-16">
      <Spin tip="Fetching group posts" />
    </div>
  );
}
