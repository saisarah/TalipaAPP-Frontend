import Http, { getErrorMessage } from "@/helpers/Http";
import { useMutation } from "@tanstack/react-query";
import { App, Button } from "antd";

const bookVehicle = async(id) => {
  const { data } = await Http.post(`/orders/${id}/book-vehicle`)
  return data
}

const useBookVehicle = (id, option) => {
  return useMutation(
    () => bookVehicle(id),
    option
  )
}

export default function BookVehicleButton ({ id, refetch }) {
  const { modal, notification } = App.useApp()
  const { mutateAsync } = useBookVehicle(id, {
    onSuccess() {
      refetch()
    },
    onError(err) {
      notification.error({ message: getErrorMessage(err) })
    }
  })

  const handleClick = () => {
    modal.confirm({
      content: "Book vehicle now?",
      async onOk() {
        await mutateAsync()
      }
    })
  }

  return (
    <Button onClick={handleClick} className="mt-4" size="large" type="primary" block>
      Book Vehicle
    </Button>
  );
}