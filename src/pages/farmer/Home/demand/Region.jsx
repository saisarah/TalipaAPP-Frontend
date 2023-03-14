import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { MessageOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Form, Select } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Region() {
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  return (
    <Page className="bg-white">
      <PageHeader back="/farmer" title="Demands" />
      <div className="px-2">
        <Select
          className="mt-4"
          mode="tags"
          placeholder="Please select your desired province"
          defaultValue={["a10", "c12"]}
          onChange={handleChange}
          style={{ width: "100%" }}
          options={options}
          suffixIcon={<SearchOutlined />}
        />
        <div className=" mt-2 flex-col rounded border border-[#e5e7eb]  bg-white p-4 py-2 text-base shadow-sm">
          <div className="flex justify-between border-b-2 pb-2">
            <div className="flex gap-2">
              <Avatar size="large" />
              <div className="flex flex-col">
                <span className="">Juan Paolo Ortega</span>
                <span className="text-xs text-slate-400">today</span>
              </div>
            </div>

            <div className="flex items-center">
              {/* <Link className="rounded bg-primary p-1 text-white">Inquire</Link> */}
              <MessageOutlined style={{ fontSize: "20px", color: "#739559" }} />
            </div>
          </div>

          <div className="mt-2">
            <span className=" text-slate-400">Description</span>
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              aperiam quasi fugiat vitae distinctio iure facere labore minus
              consequuntur cupiditate.
            </p>
          </div>

          <div className="flex justify-between">
            <div>
              <span className="text-slate-400">Commodity</span>
              <p>Mango</p>
              <span className="text-slate-400">Payment Method</span>
              <p>Gcash</p>
              <span className="text-slate-400">Location</span>
              <p>NCR langs</p>
            </div>
            <div>
              <span className="text-slate-400">Budget</span>
              <p>15,000</p>
              <span className="text-slate-400">Status</span>
              <p>Open</p>
              <span className="text-slate-400">Quantity</span>
              <p>200</p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
