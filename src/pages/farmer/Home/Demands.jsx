import { CheckCircleOutlined, CheckOutlined } from "@ant-design/icons";
import { Avatar, Button, Empty, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Demands = () => {
  return (
    <div className=" bg-white p-2">
      {/* IF EMPTY
            <Empty description="Nothing has been posted yet" /> */}
      <div className="flex flex-grow flex-col">
        <div className="my-2 flex justify-between border-b-2 py-2">
          <div className="flex flex-col">
            <span className="">Advertisers</span>
            <span className="text-xs text-slate-400">(Completion rate)</span>
          </div>
          <div className="flex flex-col">
            <span>Commodities</span>
          </div>
          <div className="flex flex-col text-right">
            <span>Price</span>
            <span className="text-xs text-primary">Highest to Lowest</span>
          </div>
        </div>
        <Buyer
          name="Josh Villanueva"
          orders="150 orders"
          completion="98%"
          price="150"
          available="300KG"
          limit="1,000 - 2,000"
          payment="Gcash"
          commodities="Banana"
        />
        <Buyer
          name="Ruel Almonia"
          orders="238 orders"
          completion="75%"
          price="320"
          available="125kg"
          limit="500 - 1,500"
          payment="Gcash, COD"
          commodities="Banana"
        />
        <Buyer
          name="Jhunriz Lalata"
          orders="238 orders"
          completion="75%"
          price="320"
          available="125kg"
          limit="500 - 1,500"
          payment="Gcash, COD"
          commodities="Mango"
        />
      </div>
    </div>
  );
};

function Buyer({
  name,
  orders,
  completion,
  price,
  available,
  limit,
  payment,
  commodities,
}) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Link
        onClick={showModal}
        className="my-2 flex justify-between border-b-2 py-2"
      >
        <div className="flex flex-col">
          <span className="">{name}</span>
          <span className="text-xs text-slate-400">
            {orders} - {completion}
          </span>
        </div>
        <div className="flex flex-col">
          <span>{commodities}</span>
        </div>
        <div className="flex flex-col">
          <span> PHP{price}/KILO</span>
        </div>
      </Link>

      <Modal
        open={open}
        title={name}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,

          <Button
            key="link"
            href="/farmer/posts/1"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Sell Commodities
          </Button>,
        ]}
      >
        <Form className="flex-col p-4">
          <div className="flex justify-between border-b-2 pb-2">
            <div className="flex gap-2">
              <Avatar size="large" />
              <div className="flex flex-col">
                <span className="text-slate-400">{name}</span>
                <span>
                  {orders} - {completion} completion
                </span>
              </div>
            </div>
            <div className="">
              <span className="rounded bg-primary px-2 py-1 text-white">
                {commodities}
              </span>
            </div>
          </div>

          <div className="flex gap-10">
            <div className="my-2 flex-col">
              <span>Price: </span>
              <span> PHP{price}/KILO</span>
            </div>
            <div className="my-2 flex-col">
              <span>Available: </span>
              <span> {available} </span>
            </div>
            <div className="my-2 flex-col">
              <span>Limit: </span>
              <span> {limit} </span>
            </div>
          </div>

          <div className="border-b-2 pb-2">
            <span>Payment Method: </span>
            <span>{payment}</span>
          </div>

          <div className="border-b-2 py-2">
            <div className="mb-3">
              <span>I want to sell</span>
              <Input
                type="number"
                addonAfter={commodities}
                placeholder="0.00"
              />
            </div>
            <div className="mb-3">
              <span>I will received</span>
              <Input
                type="number"
                addonAfter="PHP"
                placeholder={limit}
                readOnly
              />
            </div>
            <div className="mb-3">
              <span>Payment Method</span>
              <br />
              <Select defaultValue="Select Payment Method">
                <Option value="Gcash">Gcash</Option>
                <Option value="Cash on Delivery">Cash on Delivery</Option>
              </Select>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
}

export default Buyer;

{
  //   <Link className="flex flex-grow gap-3 p-2 text-xs">
  //     <div className="flex flex-col">
  //       <span className="font-bold">{name}</span>
  //       <span className="text-slate-400">
  //         {orders} - {completion} completion
  //       </span>
  //     </div>
  //     <span>{price}</span>
  //     <div className="flex flex-col">
  //       <span>Available: {available} - commodities</span>
  //       <span>Limit: {limit}</span>
  //     </div>
  //     <span className="text-green-500">{payment}</span>
  //   </Link>;
}
