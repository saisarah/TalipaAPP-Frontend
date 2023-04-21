import { fetchCrops, fetchCropsDemands } from "@/apis/CropApi";
import { useQuery } from "@tanstack/react-query";
import queryKeyFactory from "../queryKeyFactory";

export default function useCropsQuery(options = {}) {
  return useQuery(queryKeyFactory.crops, fetchCrops, {
    staleTime: Infinity,
    ...options,
  });
}

export const useCropsDemandsQuery = () => {
  return useQuery(
    fetchCropsDemands.key(), 
    fetchCropsDemands
  )
}

export const useCrop = (id) => {
  const { data: crops } = useCropsQuery();
  return crops && crops.find((crop) => crop.id === id);
};

export const useCropOptions = () => {
  return useCropsQuery({
    select: (data) => data.map(({ name, id }) => ({ value: id, label: name })),
  });
};
