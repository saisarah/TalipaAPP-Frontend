import { LeftOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import { Link } from "react-router-dom";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function Location({ fields, fieldholder }) {
  return (
    <>
      <label class="flex flex-col">
        <span class="mx-4 flex text-lg font-medium text-slate-700 before:text-red-500 before:content-['*'] after:ml-0.5">
          {fields}
        </span>
        <Select
          placeholder={fieldholder}
          className="m-4 mt-1 flex h-12 w-full flex-col rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          bordered={false}
          onChange={handleChange}
          options={[
            {
              value: "Example 1",
              label: "Example 1",
            },
            {
              value: "Example 2",
              label: "Example 2",
            },
          ]}
        />
      </label>
    </>
  );
}
function Street({ fields, fieldholder }) {
  return (
    <>
      <label class="flex flex-col">
        <span class="mx-4 flex text-lg font-medium text-slate-700 before:text-red-500 before:content-['*'] after:ml-0.5">
          {fields}
        </span>
        <Input
          size="large"
          placeholder={fieldholder}
          className="m-4 mt-1 flex h-12 flex-col rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        />
      </label>
    </>
  );
}

export default function Address() {
  return (
    <div className="mx-auto min-h-screen max-w-md">
      <Link to="/information">
        <button className="mt-8 ml-2 pb-6 text-xl">
          <LeftOutlined />
        </button>
      </Link>
      <div className="flex flex-col p-4">
        <h1 className="text-xl font-bold">Fill in the information below</h1>
      </div>
      <Location fields="Region" fieldholder="Select Region" />
      <Location fields="Province" fieldholder="Select Province" />
      <Location fields="City" fieldholder="Select City" />
      <Location fields="Barangay" fieldholder="Select Barangay" />
      <Street fields="Street/Building Name" fieldholder="" />
      <Street fields="House#/Unit/Floor" fieldholder="" />
      <Link to="/farm">
        <Button className="float-right mt-8 h-auto rounded-md bg-green-900 py-2 px-6 text-white">
          Next
        </Button>
      </Link>
    </div>
  );
}
