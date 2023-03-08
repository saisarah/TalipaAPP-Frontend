import {
  ContainerOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Collapse, Input, Modal, Space } from "antd";
import { useState } from "react";
import "../../admin/FAQ/response.css";

export default function Faq() {
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { Panel } = Collapse;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <div>
      <div className="flex">
        <div className="flex grow justify-center pt-10 text-5xl font-bold">
          <h1>Frequently Asked Questions</h1>
        </div>
      </div>
      <div className="flex justify-end gap-y-20 px-20">
        <div>
          <Button id="modal" type="primary" onClick={showModal} size="large">
            <ContainerOutlined /> Add
          </Button>
          <Modal
            title="Add FAQ"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <h4>Title</h4>
            <Input required placeholder="Title" />
            <h4>Description</h4>
            <TextArea required rows={4} />
          </Modal>
        </div>
      </div>
      <div className="flex">
        <div className="flex grow px-20">
          <Space direction="vertical w-full py-10 border-none">
            <Collapse>
              <Panel
                className="text-2xl shadow-sm"
                header="Which courier will deliver my ordered items?"
                key="1"
                id="response"
              >
                <p>
                  As of now, TalipaAPP only offers Transpotify as the only
                  courier.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center gap-3">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>

            <Collapse>
              <Panel
                className="text-2xl shadow-sm"
                header="Deos TalipaAPP offers voucher to its customers?"
                key="2"
              >
                <p>No, voucher system is not yet implemented.</p>
                <div className="flex">
                  <div className="flex grow justify-center gap-3">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>

            <Collapse>
              <Panel
                className="text-2xl shadow-sm"
                header="What payment methods do you accept?"
                key="3"
              >
                <p>TalipaAPP only accepts cash on delivery and GCash</p>
                <div className="flex">
                  <div className="flex grow justify-center gap-3">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>

            <Collapse>
              <Panel
                className="text-2xl shadow-sm"
                header="How long will my order take to get to me?"
                key="4"
              >
                <p>Orders usually take 1 to 2 days to get to the recipient.</p>
                <div className="flex">
                  <div className="flex grow justify-center gap-3">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>

            <Collapse>
              <Panel
                className="text-2xl shadow-sm"
                header="Can i cancel an order that is already shipped?"
                key="5"
              >
                <p>
                  If the order has already been shipped and is on its way to
                  you, it may not be possible to cancel it. However, you can
                  contact the seller and ask if they can cancel the order or if
                  they offer any options for returning or exchanging the item
                  once it has been received.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center gap-3">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>

            <Collapse>
              <Panel
                className="text-2xl shadow-sm"
                header="Can i receive a call before delivery?"
                key="6"
              >
                <p>
                  It depends on the delivery service and the seller's policy.
                  Some delivery services offer the option to receive a call
                  before delivery, while others do not. You can contact the
                  seller and ask if they offer this service or if the delivery
                  service they use provides it.{" "}
                </p>
                <div className="flex">
                  <div className="flex grow justify-center gap-3">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>

            <Collapse>
              <Panel
                className="text-2xl shadow-sm"
                header="What if i'm not available when my order arrives?"
                key="7"
              >
                <p>
                  If you're not available when your order arrives you can
                  contact a someone that can receive the order in your behalf.{" "}
                </p>
                <div className="flex">
                  <div className="flex grow justify-center gap-3">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>

            <Collapse>
              <Panel
                className="text-2xl shadow-sm"
                header="Can i change my delivery address after placing my order?"
                key="8"
              >
                <p>
                  Whether you can change your delivery address after placing an
                  order depends on the seller and the shipping status of the
                  order. If the order has not yet been shipped, you may be able
                  to change the delivery address by contacting the seller. If
                  the order has already been shipped, it may not be possible to
                  change the delivery address.{" "}
                </p>
                <div className="flex">
                  <div className="flex grow justify-center gap-3">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>

            <Collapse>
              <Panel
                className="text-2xl shadow-sm"
                header="Can i choose the courier who will deliver my order?"
                key="9"
              >
                <p>
                  You can check with the seller to see what shipping options
                  they offer and if you have the ability to choose the courier
                  for your delivery. If the seller does not offer the option to
                  choose a courier, they may be able to provide more information
                  on the courier that will be used for your delivery and the
                  estimated delivery time.{" "}
                </p>
                <div className="flex">
                  <div className="flex grow justify-center gap-3">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>

            <Collapse>
              <Panel
                className="text-2xl shadow-sm"
                header="Can i select the vehicle that will be use to ship my order?"
                key="10"
              >
                <p>
                  This is typically handled by the courier service and is based
                  on factors such as the size and weight of the shipment, the
                  delivery route, and the available vehicles in the area. The
                  courier service will use the most efficient and cost-effective
                  method to deliver your order, which may not involve a specific
                  type of vehicle. If you have specific delivery requirements,
                  such as a preference for a particular type of vehicle, it's
                  best to check with the seller and the courier service to see
                  if they can accommodate your request.{" "}
                </p>
                <div className="flex">
                  <div className="flex grow justify-center gap-3">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
          </Space>
        </div>
      </div>
    </div>
  );
}
