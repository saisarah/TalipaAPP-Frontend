import FormItem from "@/components/FormItem";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import useCurrentUserQuery from "@/query/queries/useCurrentUserQuery";
import { CameraOutlined, CloseOutlined } from "@ant-design/icons";
import { Avatar, Button, Form } from "antd";

export default function EditProfiles() {
  const { data } = useCurrentUserQuery();

  return (
    <>
      <Page className="bg-white">
        <PageHeader back="/farmer/profile" title="Edit Profile" />

        <div className="relative flex aspect-video items-center justify-center bg-slate-700 bg-cover bg-center">
          <img
            className="z-0 h-full w-full object-cover"
            src={data.header_image}
            alt=""
          />

          <span className="absolute mx-4 flex items-center justify-center">
            <Button
              className="edit-button z-1 mx-2  border-none bg-slate-900 bg-opacity-60 text-white  hover:border-none hover:bg-slate-500 hover:bg-opacity-40 hover:text-white"
              icon={<CameraOutlined style={{ fontSize: "0.0625 px" }} />}
              shape="circle"
              size="large"
            />
            {data.header_image != null ? (
              <Button
                className="edit-button z-1 mx-2 h-12 w-12  border-none bg-slate-900 bg-opacity-60 text-white  hover:border-none hover:bg-slate-500 hover:bg-opacity-40 hover:text-white"
                icon={<CloseOutlined />}
                shape="circle"
                size="large"
              />
            ) : null}
          </span>
        </div>

        <div className="relative flex justify-center">
          <Avatar
            icon={<UserOutlined />}
            src={data.profile_picture}
            size={120}
            className="-top-[60px] z-0 border-2 border-solid border-[#739559]"
          />
          <Button
            className="edit-button z-1 absolute -top-[25px] border-none bg-slate-900 bg-opacity-60 text-white  hover:border-none hover:bg-slate-500 hover:bg-opacity-40 hover:text-white"
            icon={<CameraOutlined />}
            shape="circle"
            size="large"
          />
        </div>

        <Form className="-mt-[50px] p-4" layout="vertical">
          <FormItem
            initialValue={data.firstname}
            label="First Name"
            name="first_name"
            placeholder="Enter your first name here"
          />
          <FormItem
            initialValue={data.middlename}
            label="Middle Name"
            name="middle_name"
            placeholder="Enter your middle name here"
          />
          <FormItem
            initialValue={data.lastname}
            label="Last Name"
            name="last_name"
            placeholder="Enter your last name here"
          />

          <div className="mb-4 flex justify-end">
            <Button
              type="primary"
              className="rounded"
              htmlType="submit"
              size="large"
            >
              Save
            </Button>
          </div>
        </Form>
      </Page>
    </>
  );
}
