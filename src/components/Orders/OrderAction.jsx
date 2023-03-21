import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { Button, Modal } from "antd";

export const OrderAction = ({ status }) => {
  const { data: user } = useCurrentUserQuery();

  if (status === "pending")
    return (
      <div className="mt-4 space-y-4">
        <CancelOrderButton />
        {user.user_type === "farmer" && (
          <Button size="large" type="primary" block>
            Accept Order
          </Button>
        )}
      </div>
    );

  return null;
};

const CancelOrderButton = () => {
  const handleClick = () => {
    Modal.confirm({
      content: "Are you sure to cancel this order?",
      onOk() {},
    });
  };

  return (
    <Button onClick={handleClick} danger size="large"  block>
      Cancel Order
    </Button>
  );
};
