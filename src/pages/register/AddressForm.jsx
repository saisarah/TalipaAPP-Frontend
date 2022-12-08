import { Button, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import useBarangaysQuery from "../../query/queries/address/useBarangaysQuery";
import { useCitiesQuery } from "../../query/queries/address/useCitiesQuery";
import useProvincesQuery from "../../query/queries/address/useProvincesQuery";
import useRegionQuery from "../../query/queries/address/useRegionQuery";

export default function AddressForm({ setStep }) {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedBarangay, setSelectedBarangay] = useState(null);

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

  useEffect(() => {
    setSelectedProvince(null);
  }, [selectedRegion]);
  useEffect(() => {
    setSelectedCity(null);
  }, [selectedProvince]);
  useEffect(() => {
    setSelectedBarangay(null);
  }, [selectedCity]);

  return (
    <Form layout="vertical" onFinish={() => setStep(2)}>
      <Form.Item className="mb-4" label="Region" hasFeedback initialValue="">
        <Select
          value={selectedRegion}
          onChange={(region) => setSelectedRegion(region)}
          size="large"
          className="rounded"
          placeholder="Select Region"
          options={regions}
          loading={fetchingRegions}
        />
      </Form.Item>

      <Form.Item className="mb-4" label="Province" hasFeedback initialValue="">
        <Select
          value={selectedProvince}
          onChange={(province) => setSelectedProvince(province)}
          size="large"
          className="rounded"
          placeholder="Select Province"
          options={provinces}
          loading={fetchingProvinces}
        />
      </Form.Item>

      <Form.Item className="mb-4" label="City" hasFeedback initialValue="">
        <Select
          value={selectedCity}
          onChange={(city) => setSelectedCity(city)}
          size="large"
          className="rounded"
          placeholder="Select City"
          options={cities}
          loading={fetchingCities}
        />
      </Form.Item>

      <Form.Item className="mb-4" label="Baranggay" hasFeedback initialValue="">
        <Select
          value={selectedBarangay}
          onChange={(brgy) => setSelectedBarangay(brgy)}
          size="large"
          className="rounded"
          placeholder="Select Barangay"
          options={barangays}
          loading={fetchingBarangays}
        />
      </Form.Item>

      <Form.Item
        className="mb-4"
        label="Street/Building Name"
        hasFeedback
        initialValue=""
      >
        <Input
          type="text"
          placeholder="Enter your street or building name"
          size="large"
          className="rounded"
        />
      </Form.Item>

      <Form.Item
        className="mb-4"
        label="House/Unit/Floor"
        hasFeedback
        initialValue=""
      >
        <Input
          type="text"
          placeholder="Enter your House number"
          size="large"
          className="rounded"
        />
      </Form.Item>

      <div className="mb-4 flex justify-end">
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
