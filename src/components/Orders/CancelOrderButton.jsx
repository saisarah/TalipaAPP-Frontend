import { useAppContext } from "@/contexts/AppContext";
import { getErrorMessage } from "@/helpers/Http";
import { useCancelOrder } from "@/query/mutations/useCancelOrder";
import { Button, Modal, notification } from "antd";
import { useNavigate } from "react-router-dom";

export const CancelOrderButton = ({ id, className }) => {
  const navigate = useNavigate();
  const { context } = useAppContext();
  const { mutate, isLoading } = useCancelOrder(id, {
    onSuccess() {
      if (context == "farmer") {
        navigate("/farmer/orders?tab=cancelled");
      } else {
        navigate("/orders?tab=cancelled");
      }
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
      okButtonProps: { loading: isLoading }
    });
  };

  return (
    <Button className={className} loading={isLoading} onClick={handleClick} danger size="large" block>
      Cancel Order
    </Button>
  );
};
