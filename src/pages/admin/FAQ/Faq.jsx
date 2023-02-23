import { Collapse, Space } from "antd";

export default function Faq() {
  const { Panel } = Collapse;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <div>
      <div className="flex">
        <div className="bb flex grow justify-center border-b-4 border-primary py-8 text-5xl font-bold">
          <h1>Frequently Asked Questions</h1>
        </div>
      </div>
      <div className="flex px-40">
        <div className="flex grow pt-4 ">
          <Space direction="vertical w-full py-10 border-none">
            <Collapse collapsible="header" defaultActiveKey={["1"]}>
              <Panel
                className="text-xl shadow-sm"
                header="This panel can only be collapsed by clicking text"
                key="1"
              >
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Collapse collapsible="icon" defaultActiveKey={["1"]}>
              <Panel
                className="text-xl shadow-sm"
                header="This panel can only be collapsed by clicking icon"
                key="1"
              >
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Collapse collapsible="icon" defaultActiveKey={["1"]}>
              <Panel
                className="text-xl shadow-sm"
                header="This panel can only be collapsed by clicking icon"
                key="1"
              >
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Collapse collapsible="icon" defaultActiveKey={["1"]}>
              <Panel
                className="text-xl shadow-sm"
                header="This panel can only be collapsed by clicking icon"
                key="1"
              >
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Collapse collapsible="icon" defaultActiveKey={["1"]}>
              <Panel
                className="text-xl shadow-sm"
                header="This panel can only be collapsed by clicking icon"
                key="1"
              >
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Space>
        </div>
      </div>
    </div>
  );
}
