import { getErrorMessage } from "@/helpers/Http";
import { useAcceptOrder } from "@/query/mutations/useAcceptOrder";
import { useQueryClient } from "@tanstack/react-query";
import { Button, Modal, notification } from "antd";

export default function AcceptOrderButton({ id, refetch }) 
{

  const { mutateAsync, isLoading } = useAcceptOrder(id, {
    onSuccess() {
      refetch()
      notification.success({ message: "Order accepted successfully" })
    },

    onError(err) {
      notification.error({ message: getErrorMessage(err) })
    }
  })

  const handleClick = () => {
    Modal.confirm({
      content: "Are you sure to accept this order?",
      async onOk() {
        await mutateAsync()
      }
    })
  }

  return (
    <Button loading={isLoading} onClick={handleClick} size="large" type="primary" block>
      Accept Order
    </Button>
  );
}
