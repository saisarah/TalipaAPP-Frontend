import { getErrorMessage } from "@/helpers/Http";
import { useAcceptOrder } from "@/query/mutations/useAcceptOrder";
import { App, Button } from "antd";

export default function AcceptOrderButton({ id, refetch }) 
{

  const { modal, notification } = App.useApp()
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
    modal.confirm({
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
