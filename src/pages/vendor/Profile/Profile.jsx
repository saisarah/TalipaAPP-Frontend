import FormItem from "@/components/FormItem";
import Page from "@/components/Page";
import { useTitle } from "@/contexts/VendorContext";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import { rules } from "@/pages/auth/register/rules";
import useCropsQuery from "@/query/queries/useCropsQuery";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { Avatar, Button, Input, Select } from "antd";

export default function Profile() {
  const { data: crops, isLoading: fetchingCrops } = useCropsQuery();
  const { data: user } = useCurrentUserQuery();
  //   const selectedCrops = [1, 4];
  useTitle("Profile");
  return (
    <Page className="bg-white text-black">
      <div className="p-4">
        <div className="flex text-center">
          <div className="flex-1 ">
            <Avatar
              className="border border-[#739559]"
              size={80}
              icon={<UserOutlined />}
              src={user.profile_picture}
            ></Avatar>
          </div>

          <div className="mt-2 flex-1 text-lg font-bold ">
            80
            <div className="text-sm font-thin leading-tight">
              Transaction <br /> Made
            </div>
          </div>
          <div className="mt-2 flex-1 text-lg font-bold ">
            80
            <div className="text-sm font-thin leading-tight">
              Transaction <br /> Ratings
            </div>
          </div>
          <div className="mt-2 flex-1 text-lg font-bold">
            4.6
            <div className="text-sm font-thin leading-tight">Ratings</div>
          </div>
        </div>
        <div className="flex w-full items-center gap-2 p-4">
          <div className="flex h-full flex-grow flex-col leading-4">
            <span className="text-xl font-bold">
              {user.firstname} {user.lastname}
            </span>

            <span className="text-slate-500">Sarah Oben's Store</span>
          </div>
          <Button className="rounded text-base flex items-center p-2 ">
            Edit your profile
          </Button>
        </div>
        <div className="w-full px-4 my-2">
          <div className="flex flex-col text-lg my-2">
            <label className=" font-bold">Address:</label>
            <span>Bagong Silang, Caloocan City</span>
            {/* <Input
              disabled
              style={{ backgroundColor: "#fff" }}
              className=" font-normal"
              placeholder="djwandjan"
            ></Input> */}
          </div>
          {/* <div className="mt-4">
            <label className="font-normal">Mobile Number:</label>
            <Input
              disabled
              style={{ backgroundColor: "#fff" }}
              className="bg-white font-normal"
              placeholder={user.contact_number}
            ></Input>
          </div> */}

          <div className=" flex flex-col text-lg my-2">
            <label className="font-bold">Email:</label>
            <span>Sarah@gmail.com</span>
            {/* <Input
              disabled
              style={{ backgroundColor: "#fff" }}
              className=" font-normal"
              placeholder={user.email}
            ></Input> */}
          </div>

          {/* <div className="">
            <div className="font-medium">Store information</div>
            <label className="font-normal">Store Name:</label>
            <Input
              disabled
              style={{ backgroundColor: "#fff" }}
              className=" font-normal"
              placeholder="Mundo Store"
            ></Input>
          </div> */}
          <div className="flex flex-col text-lg my-2">
            <label className="font-bold">Store Location:</label>
            <span>Bagong Silang Ph1</span>
            {/* <Input
              disabled
              style={{ backgroundColor: "#fff" }}
              className=" font-normal"
              placeholder="Poblacion Uno Guadalupe Makati City"
            ></Input> */}
          </div>

          <div className=" flex w-full flex-col text-lg my-2">
          <label className="font-bold">Bio:</label>
            <div className="inline-block w-full text-justify font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div>
              {/* <FormItem rules={rules.crops} name="crops">
                <Select
                  disabled
                  style={{ backgroundColor: "#fff" }}
                  mode="multiple"
                  size="large"
                  className="rounded"
                  options={crops?.map(({ name, id }) => ({
                    value: id,
                    label: name,
                  }))}
                  loading={fetchingCrops}
                />
              </FormItem> */}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
