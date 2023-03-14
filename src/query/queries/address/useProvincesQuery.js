import { useQuery } from "@tanstack/react-query";
import { fetchProvinces } from "../../../apis/Address";
import queryKeyFactory from "../../queryKeyFactory";

export default function useProvincesQuery(region) {
  return useQuery(
    queryKeyFactory.provinces(region),
    () => fetchProvinces(region),
    {
      enabled: !!region,
      staleTime: Infinity,
      select: (provinces) => {
        return provinces.map(({ province_name, ...rest }) => {
          return { value: province_name, ...rest };
        });
      },
    }
  );
}
