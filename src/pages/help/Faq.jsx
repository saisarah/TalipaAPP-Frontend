import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import  { Collapse } from "antd";

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const onChange = (key) => {
    console.log(key);
  };

export default function Faq()
{
return (
    
<Page>
    <PageHeader title="TalipaAPP FaQ" />

    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="What payment methods do you accept?" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="How long will my order take to get to me?" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="Can i cancel an order that is already shipped?" key="3">
        <p>{text}</p>
      </Panel>
      <Panel header="Can i receive a call before delivery?" key="4">
        <p>{text}</p>
      </Panel>
      <Panel header="What if I’m not available when my order arrives?" key="5">
        <p>{text}</p>
      </Panel>
      <Panel header="Can i change my delivery address after placing my order?" key="6">
        <p>{text}</p>
      </Panel>
      <Panel header="Can i choose the courier who will deliver my order?" key="7">
        <p>{text}</p>
      </Panel>
      <Panel header="Can i select the vehicle that will be use to ship my order?" key="8">
        <p>{text}</p>
      </Panel>
    </Collapse>
</Page>
);
}