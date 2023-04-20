import Page from "@/components/Page";
import { useTitle } from "@/contexts/VendorContext";
import { SearchOutlined } from "@ant-design/icons";
import { Collapse, Input } from "antd";
const { Panel } = Collapse;
export default function Help() {
  useTitle("Help Center");
  return (
    <Page className="bg-white lg:m-4 lg:shadow max-w-screen-md">
      <div className="p-4">
        <p className="text-justify text-2xl  text-black">
          We're here to help you with anything and everything on TalipaApp
        </p>
        <p className="text-justify ">
          At TalipaApp, we aim for each day to be better and happier than the
          last, and we believe that starts with you. We're here to support you
          every step of the way, whether you have a question or concern. Take a
          look at our frequently asked questions below, or reach out to us
          directly for assistance.
        </p>
        <Input
          type="text"
          className="rounded-lg "
          placeholder="Search for topics, questions..."
          suffix={<SearchOutlined />}
        />
        <div className="mt-4">
          <span className="font-bold text-black">
            Frequently Asked Questions
          </span>
        </div>

        {/* #region FAQ */}
        <Collapse
          bordered={false}
          defaultActiveKey={["0"]}
          className=" mt-[-10px] bg-transparent"
        >
          <Panel header="How long will my order take to get to me?" key="1">
            <p className="text-justify ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              placeat, culpa voluptates obcaecati harum molestiae eveniet
              architecto quae eius dolorem.
            </p>
          </Panel>
          <Panel
            header="Can i cancel an order that is already shipped?"
            key="2"
          >
            <p className="text-justify ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              placeat, culpa voluptates obcaecati harum molestiae eveniet
              architecto quae eius dolorem.
            </p>
          </Panel>
          <Panel header="Can i receive a call before delivery?" key="3">
            <p className="text-justify ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              placeat, culpa voluptates obcaecati harum molestiae eveniet
              architecto quae eius dolorem.
            </p>
          </Panel>
          <Panel
            header="What if I’m not available when my order arrives?"
            key="4"
          >
            <p className="text-justify ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              placeat, culpa voluptates obcaecati harum molestiae eveniet
              architecto quae eius dolorem.
            </p>
          </Panel>
          <Panel
            header="Can i change my delivery address after placing my order?"
            key="5"
          >
            <p className="text-justify ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              placeat, culpa voluptates obcaecati harum molestiae eveniet
              architecto quae eius dolorem.
            </p>
          </Panel>
          <Panel
            header="Can i choose the courier who will deliver my order?"
            key="6"
          >
            <p className="text-justify ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              placeat, culpa voluptates obcaecati harum molestiae eveniet
              architecto quae eius dolorem.
            </p>
          </Panel>
          <Panel
            header="Can i select the vehicle that will be use to ship my order?"
            key="7"
          >
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              placeat, culpa voluptates obcaecati harum molestiae eveniet
              architecto quae eius dolorem.
            </p>
          </Panel>
        </Collapse>
        {/* #endregion */}
        <div className="mt-5 justify-end text-center">
          <span className="text-center  text-lg text-black">
            Still Stuck? Help is a mail away.
          </span>
          <button className="align-items-center mt-2 w-10/12 rounded-[4px] bg-[#739559] p-2 font-bold text-white">
            Send a message
          </button>
        </div>
      </div>
    </Page>
  );
}
