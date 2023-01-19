import { useQuery } from "@tanstack/react-query";
import { fetchCrops } from "../../apis/CropApi";
import queryKeyFactory from "../queryKeyFactory";

export default function useCropsQuery(options = {})
{
    return useQuery(queryKeyFactory.crops, fetchCrops, {
        staleTime: Infinity,
        ...options
    })
}


export const useCrop = (id) => {
    const { data:crops } = useCropsQuery()
    return crops && crops.find(crop => crop.id === id)
}