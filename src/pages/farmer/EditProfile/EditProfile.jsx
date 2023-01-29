import FormItem from "@/components/FormItem";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import useCurrentUserQuery from "@/query/queries/useCurrentUserQuery";
import { CameraOutlined } from "@ant-design/icons";
import { Avatar, Button, Form } from "antd";

export default function EditProfiles() {
  const { data } = useCurrentUserQuery();

  return (
    <>
      <Page className="bg-white">
        <PageHeader back="/farmer/profile" title="Edit Profile" />

        <div className="relative flex aspect-video flex-col items-center justify-end bg-slate-300">
          <img
            className="z-0 object-cover"
            src="/public/assets/images/himeno.jpg"
            alt=""
          />
          <div className="top-10 inline-flex justify-center">
            <Button
              className="edit-button z-1 absolute  border-none bg-slate-900 bg-opacity-40 text-white  hover:border-none hover:bg-slate-500 hover:bg-opacity-40 hover:text-white"
              icon={<CameraOutlined />}
              shape="circle"
              size="large"
            />
            <Button
              className="edit-button z-1 absolute border-none bg-slate-900 bg-opacity-40 text-white  hover:border-none hover:bg-slate-500 hover:bg-opacity-40 hover:text-white"
              icon={<CameraOutlined />}
              shape="circle"
              size="large"
            />
          </div>
        </div>

        <div className="relative flex justify-center">
          <Avatar
            icon={<UserOutlined />}
            // src={user.profile_picture}
            src="/public/assets/images/himeno.jpg"
            size={120}
            className="-top-[60px] z-0 border-2 border-solid border-[#739559]"
          />
          <Button
            className="edit-button z-1 absolute -top-[25px] border-none bg-slate-900 bg-opacity-40 text-white  hover:border-none hover:bg-slate-500 hover:bg-opacity-40 hover:text-white"
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
          <FormItem
            initialValue={data.email}
            name="email"
            placeholder="Enter your email here"
            type="email"
            label="Email"
            validateFirst
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
