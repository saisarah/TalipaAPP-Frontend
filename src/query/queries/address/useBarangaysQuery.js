import { useQuery } from "@tanstack/react-query";
import { fetchBarangays } from "../../../apis/Address";
import queryKeyFactory from "../../queryKeyFactory";


export default function useBarangaysQuery(region, province, city) {
  return useQuery(
    queryKeyFactory.barangays(region, province, city),
    () => fetchBarangays(region, province, city),
    {
      enabled: !!region  && !!province && !!city,
      staleTime: Infinity,
      select: (barangays) => {
        return barangays.map(({ brgy_name, ...rest }) => {
          return { value: brgy_name, ...rest };
        });
      },
    }
  );
}