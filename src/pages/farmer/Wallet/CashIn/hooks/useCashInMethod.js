import useGcashMethod from "./useGcashMethod";


export default function useCashInMethod(type, option) {
  const gcashMethod = useGcashMethod(option)

  if (type === "gcash")
    return gcashMethod

  return {
    isInvalidMethod: true
  }
}