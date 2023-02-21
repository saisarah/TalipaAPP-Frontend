import { Avatar, Card } from "antd";
import Search from "antd/lib/transfer/search";
import React from "react";

function User({ name, chat, email, time }) {
  return (
    <>
      <div>
        <div className="flex">
          <Avatar className="h-10 w-10" />
          <div className="ml-2 flex flex-col">
            <span className="font-bold">{name}</span>
            <span className="leading-tight text-slate-400">{email}</span>
            <p className="whitespace-nowrap">{chat}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ChatSupport() {
  const onSearch = (value) => console.log(value);
  return (
    <div>
      <div className="flex">
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
        <div className="flex justify-center border-slate-400 ml-2">
            <div className="flex w-full">
              <Card>
                <div className="my-2 ">
                  <span className="border-b-2 font-bold text-lg pb-2">Juan Paolo Ortega</span>
                </div>

                <div className="my-2 items-center">
                  <Avatar className="h-10 w-10 mt-2"/>
                  <span className="items-center mx-2"> Hello there brother!</span>
                </div>
                <div className="flex flex-row-reverse items-center">
                <Avatar className="h-10 w-10 mt-2"/>
                  <span className="items-center mx-2"> Hello there brother!</span>
                </div>
              </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
