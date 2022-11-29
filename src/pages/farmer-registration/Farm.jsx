import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function FarmArea({ fields, fieldholder }) {
  return (
    <>
      <label class="flex flex-col">
        <span class="mx-4 flex text-lg font-medium text-slate-700 before:text-red-500 before:content-['*'] after:ml-0.5">
          {fields}
        </span>
        <input
          type="text"
          name="text"
          class="required m-4 mt-1 flex flex-col rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          placeholder={fieldholder}
        />
      </label>
    </>
  );
}
function FarmType({ fields, fieldholder }) {
  return (
    <>
      <label class="flex flex-col">
        <span class="mx-4 flex text-lg font-medium text-slate-700 before:text-red-500 before:content-['*'] after:ml-0.5">
          {fields}
        </span>
        <select
          class="required m-4 mt-1 flex flex-col rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          id="municipality_or_city"
        >
          <option>Please Select</option>
        </select>
      </label>
    </>
  );
}

export default function Farm() {
  return (
    <div className="mx-auto min-h-screen max-w-md">
      <Link to="/address">
        <button className="mt-8 ml-2 pb-6 text-xl">
          <LeftOutlined />
        </button>
      </Link>
      <div className="flex flex-col p-4">
        <h1 className="text-xl font-bold">Fill in the information below</h1>
      </div>
      <FarmArea fields="Farm Area" fieldholder="Example: 25 hectares" />
      <FarmType fields="Farm Type" />
      <FarmType fields="Ownership Type" />
      <Link to="/crops">
        <button class="float-right mx-4 mt-8 rounded-md bg-green-900 py-2 px-6 text-white">
          Next
        </button>
      </Link>
    </div>
  );
}
