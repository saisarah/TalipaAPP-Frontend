import { useCancelOrder } from "@/query/mutations/useCancelOrder";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

export const CancelOrderButton = ({ id }) => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useCancelOrder(id, {
    onSuccess() {
      navigate("/farmer/orders?tab=cancelled");
    },

    onError(err) {
      notification.error({ message: getErrorMessage(err) });
    },
  });

  const handleClick = () => {
    Modal.confirm({
      content: "Are you sure to cancel this order?",
      onOk() {
        mutate();
      },
    });
  };

  return (
    <Button loading={isLoading} onClick={handleClick} danger size="large" block>
      Cancel Order
    </Button>
  );
};
