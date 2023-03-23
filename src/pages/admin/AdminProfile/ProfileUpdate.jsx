import {
  Button,
  Card,
  DatePicker,
  Dropdown,
  Form,
  Input,
  Select,
  Upload,
  message,
} from "antd";
import { SaveOutlined, PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import FormItem from "@/components/FormItem";
import TextArea from "antd/lib/input/TextArea";

import { useState } from "react";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

export default function ProfileUpdate() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Card
        className="mb-3 p-4"
        title={<p className="font-bold uppercase">Update Avatar</p>}
      >
        {/* <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="avatar"
              style={{
                width: "100%",
              }}
            />
          ) : (
            uploadButton
          )}
        </Upload> */}
        <Form>
          <div className="flex justify-center rounded-full">
            <Upload
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader rounded-full"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
          <div className="mb-4 flex justify-end">
            <Button type="primary" className="rounded" htmlType="submit">
              <SaveOutlined />
              Save Changes
            </Button>
          </div>
        </Form>
      </Card>

      <Card
        className="mb-3 p-4"
        title={
          <p className="font-bold uppercase">Update Account Information</p>
        }
      >
        {/* <div className="my-3 grid grid-cols-3 gap-4 border-b-2">
            <div>
              <img
                src="https://via.placeholder.com/200"
                className="mb-3 rounded-full"
              />
            </div>
            <div className="col-span-2">
              <p className="text-lg font-bold uppercase">joshua villanueva</p>
              <p>
                <span className="text-primary">
                  villanuevajoshua27@gmail.com
                </span>
                <span> - Administrator</span>
              </p>
            </div>
          </div> */}
        <Form layout="vertical" className="grid grid-rows-2">
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Role</p>
            </div>
            <div className="col-span-2 space-y-4">
              {/* <Input placeholder="Email address" value="Administrator" /> */}
              <Select defaultValue="Admin" disabled="true">
                <option value="Chat support">Chat support</option>
                <option value="Moderator">Moderator</option>
                <option value="Account manager">Account manager</option>
              </Select>
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Email</p>
            </div>
            <div className="col-span-2 space-y-4">
              <Input
                placeholder="Email address"
                value="villanuevajoshua27@gmail.com"
              />
            </div>
          </div>

          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Lastname</p>
            </div>
            <div className="col-span-2 space-y-4">
              <Input placeholder="Lastname" defaultValue="Villanueva" />
            </div>
          </div>

          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Firstname</p>
            </div>
            <div className="col-span-2 space-y-4">
              <Input placeholder="Firstname" defaultValue="Joshua" />
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Gender</p>
            </div>
            <div className="col-span-2 space-y-4">
              <Select defaultValue="Male">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Birthday</p>
            </div>
            <div className="col-span-2 space-y-4">
              <DatePicker onChange={onChange} />
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Contact number</p>
            </div>
            <div className="col-span-2 space-y-4">
              <Input
                placeholder="Contact number"
                defaultValue="+639 140 1847"
              />
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Address</p>
            </div>
            <div className="col-span-2 space-y-4">
              <TextArea
                placeholder="Address"
                defaultValue="A. Bonifacio Ave. Brgy. Sto. Domingo Cainta Rizal"
              />
            </div>
          </div>

          <div className="mb-4 flex justify-end">
            <Button type="primary" className="rounded" htmlType="submit">
              <SaveOutlined />
              Save Changes
            </Button>
          </div>
        </Form>
      </Card>

      <Card
        title={<p className="font-bold uppercase">Change password</p>}
        className="mb-3 p-4"
      >
        <Form layout="vertical" className="grid grid-rows-2">
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Old password</p>
            </div>
            <div className="col-span-2 space-y-4">
              <Input.Password />
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">New password</p>
            </div>
            <div className="col-span-2 space-y-4">
              <Input.Password />
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Confirm password</p>
            </div>
            <div className="col-span-2 space-y-4">
              <Input.Password />
            </div>
          </div>

          <div className="mb-4 flex justify-end">
            <Button type="primary" className="rounded" htmlType="submit">
              <SaveOutlined />
              Save Changes
            </Button>
          </div>
        </Form>
      </Card>
    </>
  );
}
