import { fetchCropsDemands } from "@/apis/CropApi"
import { useQueryClient } from "@tanstack/react-query"
import useSocket from "../useSocket"


export const useDemandsUpdatedListener = () => {

  const queryClient = useQueryClient()

  const listener = () => {
    queryClient.invalidateQueries(fetchCropsDemands.key())
  }

  useSocket({
    channel: 'farmers',
    listener,
    event: 'DemandsUpdated'
  })
}