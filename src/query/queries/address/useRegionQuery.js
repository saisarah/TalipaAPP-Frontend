import { useQuery } from "@tanstack/react-query";
import { fetchRegions } from "../../../apis/Address";
import queryKeyFactory from "../../queryKeyFactory";

export default function useRegionQuery(filters = null) {
  return useQuery(queryKeyFactory.regions, fetchRegions, {
    staleTime: Infinity,

    select: (regions) => {
      return regions
        .map(({ region_name, ...rest }) => {
          return { value: region_name, ...rest };
        })
        .filter((region) => {
          if (filters === null) return true;
          return filters.some((filter) => filter === region.region_code);
        });
    },
  });
}
