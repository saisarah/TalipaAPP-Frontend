import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
import "../Settings/breakpoint.css";

export default function ChangePassword() {
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <div id="breakpoint">
        <div className="flex flex-1 flex-col px-40 pt-20" id="title">
          <p className="text-3xl font-bold text-primary">
            Talipaapp Account Change password
          </p>
          <p className="text-lg">
            We recommend that you periodically update your password to help to
            prevent unauthorized access to your account.
          </p>
        </div>
        <Form className="flex-1 gap-5 p-40">
          <br />
          <div className="pt-2">
            <Input.Password
              placeholder="CURRENT PASSWORD"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </div>
          <br />
          <div className="pt-2">
            <Input.Password
              placeholder="NEW PASSWORD"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </div>
          <br />
          <div className="pt-2">
            <Input.Password
              placeholder="NEW PASSWORD"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </div>
          <div className="my-4 flex justify-end">
            <Button type="primary">SAVE CHANGES</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
