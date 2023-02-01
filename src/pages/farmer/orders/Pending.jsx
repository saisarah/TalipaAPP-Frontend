import { Empty } from "antd";

export const Pending = () => {
  return (
    <div className="my-16 flex items-center justify-center">
      <Empty description="Nothing has been posted yet" />
    </div>
  );
};
