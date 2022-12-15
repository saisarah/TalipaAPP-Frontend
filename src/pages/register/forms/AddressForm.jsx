import { Button, Form, Select } from "antd";
import { useState } from "react";
import FormItem from "../../../components/FormItem";
import { useRegistrationContext } from "../../../contexts/RegistrationContext";
import { useEffectSkipFirst } from "../../../helpers/hooks";
import useBarangaysQuery from "../../../query/queries/address/useBarangaysQuery";
import { useCitiesQuery } from "../../../query/queries/address/useCitiesQuery";
import useProvincesQuery from "../../../query/queries/address/useProvincesQuery";
import useRegionQuery from "../../../query/queries/address/useRegionQuery";
import { rules } from "../rules";

const useAddressFormState = (data) => {
  const [selectedRegion, setSelectedRegion] = useState(data.region);
  const [selectedProvince, setSelectedProvince] = useState(data.province);
  const [selectedCity, setSelectedCity] = useState(data.municipality);
  const [selectedBarangay, setSelectedBarangay] = useState(data.barangay);

  const { data: regions, isFetching: fetchingRegions } = useRegionQuery();
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

export default function AddressForm() {
  const { setStep, data, setData } = useRegistrationContext();

  const {
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
  } = useAddressFormState(data);

  const handleSubmit = (addressData) => {
    setData((data) => ({ ...data, ...addressData }));
    setStep((step) => step + 1);
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit} initialValues={data}>
      <FormItem name="region" label="Region" rules={rules.region}>
        <Select
          value={selectedRegion}
          onChange={(region) => setSelectedRegion(region)}
          size="large"
          className="rounded"
          placeholder="Select Region"
          options={regions}
          loading={fetchingRegions}
        />
      </FormItem>

      <FormItem name="province" rules={rules.province} label="Province">
        <Select
          disabled={!selectedRegion}
          value={selectedProvince}
          onChange={(province) => setSelectedProvince(province)}
          size="large"
          className="rounded"
          placeholder="Select Province"
          options={provinces}
          loading={fetchingProvinces}
        />
      </FormItem>

      <FormItem name="municipality" rules={rules.city} label="City">
        <Select
          disabled={!selectedProvince}
          value={selectedCity}
          onChange={(city) => setSelectedCity(city)}
          size="large"
          className="rounded"
          placeholder="Select City"
          options={cities}
          loading={fetchingCities}
        />
      </FormItem>

      <FormItem name="barangay" label="Baranggay" rules={rules.barangay}>
        <Select
          disabled={!selectedCity}
          value={selectedBarangay}
          onChange={(brgy) => setSelectedBarangay(brgy)}
          size="large"
          className="rounded"
          placeholder="Select Barangay"
          options={barangays}
          loading={fetchingBarangays}
        />
      </FormItem>

      <FormItem
        label="Street/Building Name"
        placeholder="Enter your street or building name"
        name="street"
        rules={rules.street}
      />

      <FormItem
        label="House/Unit/Floor"
        placeholder="Enter your house number"
        name="house_number"
        rules={rules.house_number}
      />

      <div className="mb-4 flex justify-between">
        <Button
          size="large"
          className="rounded"
          onClick={() => setStep((step) => step - 1)}
        >
          Back
        </Button>
        <Button
          type="primary"
          className="rounded"
          htmlType="submit"
          size="large"
        >
          Next
        </Button>
      </div>
    </Form>
  );
}
