import { useState } from "react";
import useGcashMethod from "./useGcashMethod";
import usePaypalMethod from "./usePaypalMethod";


export default function useCashInMethod(type) {
  const [amount, setAmount] = useState(0);
  const gcashMethod = useGcashMethod(amount)
  const paypalMethod = usePaypalMethod(amount)

  if (type === "gcash")
    return {...gcashMethod, setAmount}

  if (type === "paypal")
    return {...paypalMethod, setAmount}

  return {
    isInvalidMethod: true
  }
}