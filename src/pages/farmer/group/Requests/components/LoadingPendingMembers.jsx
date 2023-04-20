import { Spin } from "antd";

export const LoadingPendingMembers = () => {
  return (
    <div className="flex justify-center py-16">
      <Spin tip="Fetching pending members" />
    </div>
  );
};
