import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Select,
  Upload,
  message,
} from "antd";
import { SaveOutlined, PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import { rules } from "./rules";
import { useState } from "react";
import FormItem from "@/components/FormItem";
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
                  className="h-24 w-24 rounded"
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
        <Form layout="vertical" className="grid grid-rows-2">
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Role</p>
            </div>
            <div className="col-span-2 space-y-4">
              <FormItem>
                <Select defaultValue="Admin" disabled="true" size="large">
                  <option value="Chat support">Chat support</option>
                  <option value="Moderator">Moderator</option>
                  <option value="Account manager">Account manager</option>
                </Select>
              </FormItem>
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Email</p>
            </div>
            <div className="col-span-2 space-y-4">
              <FormItem name="email" rules={rules.email}>
                <Input
                  placeholder="Email address"
                  defaultValue="villanuevajoshua27@gmail.com"
                  size="small"
                  readOnly
                />
              </FormItem>
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Lastname</p>
            </div>
            <div className="col-span-2 space-y-4">
              <FormItem name="lastname" rules={rules.lastname}>
                <Input placeholder="Lastname" defaultValue="" size="small" />
              </FormItem>
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Firstname</p>
            </div>
            <div className="col-span-2 space-y-4">
              <FormItem name="firstname" rules={rules.firstname}>
                <Input
                  placeholder="Firstname"
                  defaultValue="Joshua"
                  size="small"
                />
              </FormItem>
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Middlename</p>
            </div>
            <div className="col-span-2 space-y-4">
              <FormItem name="middlename" rules={rules.middlename}>
                <Input
                  placeholder="Middlename"
                  defaultValue="Joshua"
                  size="small"
                />
              </FormItem>
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Gender</p>
            </div>
            <div className="col-span-2 space-y-4">
              <FormItem name="gender" rules={rules.gender}>
                <Select defaultValue="Male" size="large">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
              </FormItem>
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Birthday</p>
            </div>
            <div className="col-span-2 space-y-4">
              <FormItem name="birthday" rules={rules.birthday}>
                <DatePicker onChange={onChange} size="large" />
              </FormItem>
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Contact number</p>
            </div>
            <div className="col-span-2 space-y-4">
              <FormItem name="phone" rules={rules.phone}>
                <Input
                  placeholder="Contact number"
                  defaultValue="+639 140 1847"
                  size="small"
                  type="number"
                />
              </FormItem>
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Address</p>
            </div>
            <div className="col-span-2 space-y-4">
              <FormItem name="address" rules={rules.address}>
                <TextArea
                  placeholder="Address"
                  defaultValue="A. Bonifacio Ave. Brgy. Sto. Domingo Cainta Rizal"
                />
              </FormItem>
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
              <FormItem name="old_password" rules={rules.old_password}>
                <Input.Password size="small" />
              </FormItem>
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">New password</p>
            </div>
            <div className="col-span-2 space-y-4">
              <FormItem name="password" rules={rules.password}>
                <Input.Password size="small" />
              </FormItem>
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-1 space-y-4">
              <p className="font-bold uppercase">Confirm password</p>
            </div>
            <div className="col-span-2 space-y-4">
              <FormItem
                name="password_confirmation"
                rules={rules.password_confirmation}
              >
                <Input.Password size="small" />
              </FormItem>
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
