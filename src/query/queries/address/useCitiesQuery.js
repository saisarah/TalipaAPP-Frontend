import { useQuery } from "@tanstack/react-query";
import { fetchCities } from "../../../apis/Address";
import queryKeyFactory from "../../queryKeyFactory";


export function useCitiesQuery(region, province) {
  return useQuery(
    queryKeyFactory.cities(region, province),
    () => fetchCities(region, province),
    {
      enabled: region !== null && province !== null,
      staleTime: Infinity,
      select: (cities) => {
        return cities.map(({ city_name, ...rest }) => {
          return { value: city_name, ...rest };
        });
      },
    }
  );
}