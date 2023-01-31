import { useState } from "react";
import { useRegistrationContext } from "../../../contexts/RegistrationContext";
import { useEffectSkipFirst } from "../../../helpers/hooks";
import useBarangaysQuery from "../../../query/queries/address/useBarangaysQuery";
import { useCitiesQuery } from "../../../query/queries/address/useCitiesQuery";
import useProvincesQuery from "../../../query/queries/address/useProvincesQuery";
import useRegionQuery from "../../../query/queries/address/useRegionQuery";

const regionFilters = {
    'farmer': ["01", "02", "04", "17", "05", "14", "13"],
    'vendor': ["13"],
}

export const useAddressFormState = () => {

    const { data, accountType } = useRegistrationContext()
    const regionFilter = regionFilters[accountType]

    const [selectedRegion, setSelectedRegion] = useState(data.region);
    const [selectedProvince, setSelectedProvince] = useState(data.province);
    const [selectedCity, setSelectedCity] = useState(data.municipality);
    const [selectedBarangay, setSelectedBarangay] = useState(data.barangay);
  
    const { data: regions, isFetching: fetchingRegions } = useRegionQuery(regionFilter);
    const { data: provinces, isFetching: fetchingProvinces } =
      useProvincesQuery(selectedRegion);
    const { data: cities, isFetching: fetchingCities } = useCitiesQuery(
      selectedRegion,
      selectedProvince
    );
    const { data: barangays, isFetching: fetchingBarangays } = useBarangaysQuery(
      selectedRegion,
      selectedProvince,
      selectedCity
    );
  
    useEffectSkipFirst(() => {
      setSelectedProvince(null);
    }, [selectedRegion]);
    useEffectSkipFirst(() => {
      setSelectedCity(null);
    }, [selectedProvince]);
    useEffectSkipFirst(() => {
      setSelectedBarangay(null);
    }, [selectedCity]);
  
    return {
      selectedRegion,
      selectedProvince,
      selectedCity,
      selectedBarangay,
      setSelectedRegion,
      setSelectedProvince,
      setSelectedCity,
      setSelectedBarangay,
      regions,
      provinces,
      cities,
      barangays,
      fetchingRegions,
      fetchingProvinces,
      fetchingCities,
      fetchingBarangays,
    };
  };