import { useState } from "react";
import useBuxMethod from "./useBuxMethod";
import useGcashMethod from "./useGcashMethod";
import usePaypalMethod from "./usePaypalMethod";


export default function useCashInMethod(type) {
  const [amount, setAmount] = useState(0);
  const gcashMethod = useGcashMethod(amount)
  const paypalMethod = usePaypalMethod(amount)
  const buxMethod = useBuxMethod(amount)

  if (type === "gcash")
    return {...gcashMethod, setAmount}

  if (type === "paypal")
    return {...paypalMethod, setAmount}

  if (type === "bux")
    return {...buxMethod, setAmount}

  throw new Error(`Invalid Cash in method: ${type}`)
}