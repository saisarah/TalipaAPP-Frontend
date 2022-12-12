import { ArrowLeftOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function CreatePost({ fields, fieldholder, product }) {
  return (
    <>
      <label class="flex flex-col">
        <span class="mx-4 flex text-lg font-medium text-slate-700 before:text-red-500 before:content-['*'] after:ml-0.5">
          {fields}
        </span>
        <Select
          placeholder={fieldholder}
          className="m-4 mt-1 flex h-12 w-auto flex-col rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          bordered={false}
          onChange={handleChange}
          options={[
            {
              value: {product},
              label: "Pineapple",
            },
            {
              value: "Mango",
              label: "Mango",
            },
            {
              value: "Banana",
              label: "Banana",
            },
            {
              value: "Garlic",
              label: "Garlic",
            },
            {
              value: "Onion",
              label: "Onion",
            },
            {
              value: "Cabbage",
              label: "Cabbage",
            },
            {
              value: "Eggplant",
              label: "Eggplant",
            },
          ]}
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

export default function PostInformation() {
  return (
    <div>
      <div className="mx-auto min-h-screen max-w-md  bg-slate-50">
        <PageHeader
          left={
            <Link to="/farmer">
              <ArrowLeftOutlined style={{ fontSize: "16px" }} />
            </Link>
          }
          title="Create Post"
        />
        <CreatePost fields="Commodity" fieldholder="Pineapple" />
        <CreatePost fields="Unit" fieldholder="Kilogram" />
        <CreatePost fields="Pricing Type" fieldholder="Not Straight" value=""/>
      </div>
    </div>
  );
}
