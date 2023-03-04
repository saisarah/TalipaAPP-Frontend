import { Avatar, Card } from "antd";
import Search from "antd/lib/transfer/search";
import React from "react";

function User({ name, chat, email, time }) {
  return (
    <>
      <div className="flex">
        <Avatar className="h-10 w-10" />
        <div className="ml-2 flex flex-col">
          <span className="font-bold">{name}</span>
          <span className="leading-tight text-slate-400">{email}</span>
          <span className="whitespace-nowrap">{chat}</span>
        </div>
      </div>
    </>
  );
}

export default function ChatSupport() {
  const onSearch = (value) => console.log(value);
  return (
    <div className="flex">
      <div className="flex flex-none">
        <Card>
          <div className=" border-slate-400">
            <div className="m-2 w-auto">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{ width: 200 }}
              />
            </div>
            <div className="px-2">
              <User
                name={"Ericka"}
                email={"ericka@gmail.com"}
                chat={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              />
              <User
                name={"Ericka"}
                email={"ericka@gmail.com"}
                chat={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              />
              <User
                name={"Ericka"}
                email={"ericka@gmail.com"}
                chat={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="ml-2 flex w-full grow border-slate-400">
        <Card>
          <div className="my-2 ">
            <span className="border-b-2 pb-2 text-lg font-bold">
              Juan Paolo Ortega
            </span>
          </div>
          <div className="my-2 items-center">
            <Avatar className="mt-2 h-10 w-10" />
            <span className="mx-2 items-center"> Hello there brother!</span>
          </div>
          <div className="flex flex-row-reverse items-center">
            <Avatar className="mt-2 h-10 w-10" />
            <span className="mx-2 items-center"> Hello there brother!</span>
          </div>
        </Card>
      </div>
    </div>
  );
}
