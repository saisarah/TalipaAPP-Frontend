import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React from "react";

function Review({ user, ratings, comment, review }) {
  return (
    <div>
      <div className="mx-4 my-4">
        <Card className="shadow-md">
          <div className="my-2 flex items-center ">
            <Avatar className="mr-2 h-10 w-10 flex-shrink-0" />
            <div className="flex flex-grow justify-between">
              <h1 className="text-lg">{user}</h1>
              <span className="ml-2 text-lg text-[#739559]">{ratings}</span>
            </div>
          </div>
          <div className="">
            <span className="mb-2 flex text-base">{comment}</span>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
      <Page className="bg-white">
        <PageHeader back="/#" title="Reviews" />

        <div>
          <Review
            user={"Sarah Grace Arlyn Oben"}
            ratings={[
              <StarFilled />,
              <StarFilled />,
              <StarOutlined />,
              <StarOutlined />,
              <StarOutlined />,
            ]}
            comment={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
        <div>
          <Review
            user={"Reilly Rubante"}
            ratings={[
              <StarFilled />,
              <StarOutlined />,
              <StarOutlined />,
              <StarOutlined />,
              <StarOutlined />,
            ]}
            comment={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
        <div>
          <Review
            user={"John Kenneth Reyes"}
            ratings={[
              <StarFilled />,
              <StarFilled />,
              <StarFilled />,
              <StarFilled />,
              <StarOutlined />,
            ]}
            comment={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
        <div>
          <Review
            user={"Saturnino Ursua"}
            ratings={[
              <StarFilled />,
              <StarFilled />,
              <StarFilled />,
              <StarOutlined />,
              <StarOutlined />,
            ]}
            comment={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
      </Page>
  );
}
