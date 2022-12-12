import { Select } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function Post({ fields, fieldholder }) {
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
              value: "Pineapple",
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

export default function CreatePost() {
  return (
    <div className="mx-auto min-h-screen max-w-md">
      <Post fieldholder={"Pineapple"} fields={"Commodity"} />
    </div>
  );
}
