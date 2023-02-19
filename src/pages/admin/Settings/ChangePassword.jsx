import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";

export default function ChangePassword() {
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="flex flex-1 flex-col p-40">
          <p className="text-3xl font-bold text-primary">
            Talipaapp Accout Change password
          </p>
          <p className="text-lg">
            We recommend that you periodically update your password to help to
            prevent unauthorized access to your account.
          </p>
        </div>
        <div className="flex-1 gap-5 p-40">
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
          <div className="flex grow gap-6 p-10">
            <Button className="rounded px-20 font-bold" size="large">
              CANCEL
            </Button>
            <Button
              className="rounded bg-primary px-20 font-bold text-white"
              size="large"
            >
              SAVE CHANGES
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
