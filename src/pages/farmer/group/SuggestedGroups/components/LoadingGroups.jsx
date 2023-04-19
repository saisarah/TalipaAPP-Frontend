import { Spin } from "antd";

export default function LoadingGroups() {
  return (
    <div className="flex flex-col items-center py-16">
      <Spin />
    </div>
  );
}
