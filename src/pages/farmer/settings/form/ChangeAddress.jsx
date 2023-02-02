import FormItem from "@/components/FormItem";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { Button, Input, Select, Space } from "antd";


export default function ChangeAddress() {

  return (
    <Page className="bg-white">
      <PageHeader title="Change Address" back="/farmer/settings" />

      <Space direction="vertical flex p-4">
        <Select
          defaultValue="Select Region"
          style={{ width: "100%" }}
          options={[
            { value: "Region I", label: "Region I" },
            { value: "Region II", label: "Region II" },
            { value: "Region III", label: "Region III" },
          ]}
        />
        <Select
          defaultValue="Select Province"
          style={{ width: "100%" }}
          options={[
            { value: "Region I", label: "Region I" },
            { value: "Region II", label: "Region II" },
            { value: "Region III", label: "Region III" },
          ]}
        />
        <Select
          defaultValue="Select City"
          style={{ width: "100%" }}
          options={[
            { value: "Region I", label: "Region I" },
            { value: "Region II", label: "Region II" },
            { value: "Region III", label: "Region III" },
          ]}
        />
        <Select
          defaultValue="Select Baranggay"
          style={{ width: "100%" }}
          options={[
            { value: "Region I", label: "Region I" },
            { value: "Region II", label: "Region II" },
            { value: "Region III", label: "Region III" },
          ]}
        />
        <Input placeholder="Enter your street or building name"/>
      </Space>
      <div className="flex justify-end px-4">
        <Button type="primary" className="flex-grow">
          Submit
        </Button>
      </div>
    </Page>
  );
}
