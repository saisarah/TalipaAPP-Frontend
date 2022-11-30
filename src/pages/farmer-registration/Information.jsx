import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button, Input } from "antd";
import { InputNumber } from "antd";
import { Select } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function Required({ fields, fieldholder }) {
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
function NotRequired({ fields, fieldholder }) {
  return (
    <>
      <label class="flex flex-col">
        <span class="mx-4 flex text-lg font-medium text-slate-700">
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
function ContactNumber({ fields, number }) {
  return (
    <>
      <label class="flex flex-col">
        <span class="mx-4 flex text-lg font-medium text-slate-700 before:text-red-500 before:content-['*'] after:ml-0.5">
          {fields}
        </span>
        <InputNumber
          fields="Contact Number"
          defaultValue={63}
          controls={false}
          className="m-4 mt-1 flex h-12 w-full flex-col rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        />
      </label>
    </>
  );
}
function Gender({ fields, fieldholder }) {
  return (
    <>
      <label class="flex flex-col">
        <span class="mx-4 flex text-lg font-medium text-slate-700">
          {fields}
        </span>
        <Select
          defaultValue="Select your gender"
          className="m-4 mt-1 flex h-12 w-full flex-col rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          bordered={false}
          onChange={handleChange}
          options={[
            {
              value: "Male",
              label: "Male",
            },
            {
              value: "Female",
              label: "Female",
            },
          ]}
        />
      </label>
    </>
  );
}

export default function Information() {
  return (
    <div className="mx-auto min-h-screen max-w-md">
      <Link to="/registration">
        <button className="mt-8 ml-2 pb-6 text-xl">
          <LeftOutlined />
        </button>
      </Link>
      <div className="mb-10 flex flex-col p-4">
        <h1 className="text-xl ">Welcome</h1>
        <h1 className="text-xl font-bold">Fill in the information below</h1>
      </div>
      <Required fields="First Name" fieldholder="Enter your first name" />
      <NotRequired fields="Middle Name" fieldholder="Enter your middle name" />
      <Required fields="Last Name" fieldholder="Enter your last name" />
      <ContactNumber fields="Contact Number" />
      <Gender fields="Gender" />

      <Link to="/address">
        <Button className="float-right mt-8 h-auto rounded-md bg-green-900 py-2 px-6 text-white">
          Next
        </Button>
      </Link>
    </div>
  );
}
