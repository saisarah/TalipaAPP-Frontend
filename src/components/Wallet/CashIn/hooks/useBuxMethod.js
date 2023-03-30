import { useAppContext } from "@/contexts/AppContext"
import Http, { getErrorMessage } from "@/helpers/Http"
import { useMutation } from "@tanstack/react-query"
import { notification } from "antd"
import { v4 as uuidv4 } from 'uuid';

const useReturnUrl = (id) => {
  const { context, getFullPath } = useAppContext()
  if (context === "farmer")
    return getFullPath(`/farmer/wallet/cash-in/result-bux/${id}`)

  return getFullPath(`/wallet/cash-in/result-bux/${id}`)
}

const cashInBux = async (return_url, amount, id) => {
  const { data } = await Http.post('/wallet/cash-in-bux', {
    return_url,
    amount,
    id
  })

  return data
}

export default function useBuxMethod(amount)
{
  const id = uuidv4()
  const returnUrl = useReturnUrl(id)
  const { mutate, isLoading } = useMutation(
    (amount) => cashInBux(returnUrl, amount, id),
    {
      onSuccess(data) {
        window.location = data.checkout_url
      },
  
      onError(err) {
        notification.error({ message: getErrorMessage(err) });
      },
    }
  );
  const total = amount;

  const fees = [
  ]

  const handleSubmit = () => {
    if (amount < 500) {
      notification.error({
        message: "The minimum amount you can cash in is 500PHP",
      });
      return;
    }

    if (isLoading) return;

    mutate(amount);
  }

  return {
    amount, 
    fees,
    total,
    handleSubmit,
    isLoading
  }
}