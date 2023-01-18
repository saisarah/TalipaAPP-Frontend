import PageHeader from "@/components/PageHeader";
import {
  ArrowLeftOutlined,
  FileImageOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { Button, Space, Tag } from "antd";
import { Link } from "react-router-dom";

import { PlusOutlined } from "@ant-design/icons";
import { Input, theme, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";

function CreateDiscussion({ title, tags, image }) {
  return (
    <>
      <div className="w-full">
        <div className="mb-4 mt-4 w-full border bg-white px-4 pt-4">
          <span className="text-lg text-black">{title}</span>

          <div className="with-full pt-4">
            <div className="inline-flex gap-4 ">
              <div>
                <Button
                  className="text-slate-400"
                  icon={<TagOutlined />}
                  size="large"
                  type="text"
                  style={{ padding: "0" }}
                >
                  Add tags
                </Button>
              </div>
              <div>
                <Button
                  className="text-slate-400"
                  icon={<FileImageOutlined />}
                  size="large"
                  type="text"
                  style={{ padding: "0" }}
                >
                  Add image
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <textarea
          class="
        form-control
        m-0
        block
        h-auto
        w-full
        px-4 py-4  text-base
        font-normal
        text-gray-400
        transition
        ease-in-out
        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
      "
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Write a post"
        ></textarea>
      </div>
    </>
  );
}

export default function Discussions() {
  return (
    <div className="relative mx-auto min-h-screen max-w-md bg-white px-2">
      <PageHeader
        left={
          <Link to="/farmer">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Create Discussion"
      />

      <CreateDiscussion title="This is a title of the discussion" />

      <div className="absolute inset-x-0 bottom-0 m-6 ">
        <Space direction="vertical" style={{ width: "100%" }}>
          <Button className="rounded font-bold" type="primary" block>
            Post
          </Button>
        </Space>
      </div>
    </div>
  );
}
