import { Spin } from "antd";

export const LoadingInvitations = () => {
  return (
    <div className="flex justify-center py-16">
      <Spin tip="Fetching Invitations" />
    </div>
  );
};
