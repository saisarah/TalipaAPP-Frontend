import { Avatar, Card } from "antd";
import Search from "antd/lib/transfer/search";
import React from "react";

function User ({}) {
    return (

    )
}

export default function ChatSupport() {
  const onSearch = (value) => console.log(value);
  return (
    <div>
      <div className="flex grid-rows-2 justify-between gap-2">
        <div className="flexjustify-center border-x-2 border-slate-400">
          <div className="flex flex-col">
            <div className="mx-2 w-96">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{ width: 200 }}
              />
            </div>
            <div className="px-2">
            <Card className="my-2 ">
            <Avatar/>
            </Card>
            </div>
          </div>
        </div>
        <div className="flex flex-grow justify-center border-r-2 border-slate-400">
          <div className="flex flex-grow flex-col">
            <div className="w-60">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{ width: 200 }}
              />
            </div>

            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
}
