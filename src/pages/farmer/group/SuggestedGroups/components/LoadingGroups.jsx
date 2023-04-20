import { Spin } from "antd";

export default function LoadingGroups() {
  return (
    <div className="flex justify-center py-16">
      <Spin tip="Fetching Groups..." />
    </div>
  );
}
