import { Button, Modal } from "antd";

export const CancelOrderButton = ({ id }) => {
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
  