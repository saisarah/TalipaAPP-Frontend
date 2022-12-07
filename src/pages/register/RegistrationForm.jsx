import { LeftOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input, PageHeader, Select, Steps } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {
  regions as fetchRegions,
  provinces,
  cities,
  barangays,
} from "select-philippines-address";

function PersonalInformationForm({ setStep }) {
  return (
    <Form layout="vertical" onFinish={() => setStep(1)}>
      <Form.Item className="mb-4" label="Firstname" hasFeedback>
        <Input
          type="text"
          placeholder="Enter your firstname here"
          size="large"
          className="rounded"
        />
      </Form.Item>
      <Form.Item className="mb-4" label="Middlename" hasFeedback>
        <Input
          type="text"
          placeholder="Enter your middlename here"
          size="large"
          className="rounded"
        />
      </Form.Item>
      <Form.Item className="mb-4" label="Lastname" hasFeedback>
        <Input
          type="text"
          placeholder="Enter your lastname here"
          size="large"
          className="rounded"
        />
      </Form.Item>
      <Form.Item className="mb-4" label="Phone" hasFeedback>
        <Input
          addonBefore="+63"
          type="text"
          placeholder="912 3456 789"
          size="large"
          className="rounded"
        />
      </Form.Item>
      <Form.Item className="mb-4" label="Email" hasFeedback>
        <Input
          type="email"
          placeholder="your_email@site.com"
          size="large"
          className="rounded"
        />
      </Form.Item>
      <Form.Item className="mb-4" label="Gender" hasFeedback initialValue="">
        <Select size="large" className="rounded">
          <Select.Option value="">Prefer not to say</Select.Option>
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
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

function AddressForm({ setStep }) {
  const { data: regions, isLoading: regionsIsLoading } = useQuery(
    ["region"],
    fetchRegions,
    {
      select: (data) =>
        data.map((row) => ({ label: row.region_name, value: row.region_code })),
    }
  );

  const [selectedRegion, setSelectedRegion] = useState();

  // const [regions, setRegions] = useState([]);

  // useEffect(
  //   function () {
  //     async function fetchRegions() {
  //       const regions = await axios.get('https://isaacdarcilla.github.io/philippine-addresses/region.json')
  //       setRegions(regions.data.map((region) => ({ value: region.region_code, label: region.region_name })))
  //     }
  //     fetchRegions()
  //   },
  //   []
  // );

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
          loading={regionsIsLoading}
        />
      </Form.Item>

      <Form.Item className="mb-4" label="Province" hasFeedback initialValue="">
        <Select size="large" className="rounded">
          <Select.Option value="">ProvinceName</Select.Option>
          <Select.Option value="male">ProvinceName</Select.Option>
          <Select.Option value="female">ProvinceName</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item className="mb-4" label="City" hasFeedback initialValue="">
        <Select size="large" className="rounded">
          <Select.Option value="">CityName</Select.Option>
          <Select.Option value="male">Cityname</Select.Option>
          <Select.Option value="female">Cityname</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item className="mb-4" label="Baranggay" hasFeedback initialValue="">
        <Select size="large" className="rounded">
          <Select.Option value="">Baranggayname</Select.Option>
          <Select.Option value="male">Baranggayname</Select.Option>
          <Select.Option value="female">Baranggayname</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        className="mb-4"
        label="Street/Building Name"
        hasFeedback
        initialValue=""
      >
        <Select size="large" className="rounded">
          <Select.Option value="">Street/Building</Select.Option>
          <Select.Option value="male">Street/Building</Select.Option>
          <Select.Option value="female">Street/Building</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        className="mb-4"
        label="House/unit/ Floor"
        hasFeedback
        initialValue=""
      >
        <Select size="large" className="rounded">
          <Select.Option value="">House/Unit/Floor</Select.Option>
          <Select.Option value="male">House/Unit/Floor</Select.Option>
          <Select.Option value="female">House/Unit/Floor</Select.Option>
        </Select>
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

export default function RegistrationForm({ reset }) {
  const [step, setStep] = useState(0);

  return (
    <>
      <PageHeader title="home" className="shadow" />
      <div className="p-4">
        <div className="mb-6 flex items-center">
          <Button type="text" onClick={reset} icon={<LeftOutlined />} />
          <div className="text-2xl font-bold">Create Your Account</div>
        </div>
        <Steps
          items={[{ title: "Personal Information" }, { title: "Address" }]}
          size="small"
          className="mb-8"
          current={step}
          direction="vertical"
        />
        {step === 0 && <PersonalInformationForm setStep={setStep} />}
        {step === 1 && <AddressForm />}
      </div>
    </>
  );
}
