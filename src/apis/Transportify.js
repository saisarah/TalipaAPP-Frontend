import Http from "@/helpers/Http"


export const fetchVehicles = async() => {
  const { data } = await Http.get('/transportify/vehicles')
  return data
}

export const getQuote = async (deliveryData) => {
  const { data } = await Http.post('/transportify/get-quote', deliveryData)
  return data
}