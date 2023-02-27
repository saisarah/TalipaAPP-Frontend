import { Spin } from "antd";

export const LoadingSkeleton = ({
  children,
  loading,
  loadingText = "Loading, please wait",
}) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Spin tip={loadingText} />
      </div>
    );
  }

  return children;
};
