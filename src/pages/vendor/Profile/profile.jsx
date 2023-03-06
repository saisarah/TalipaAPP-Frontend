import FormItem from "@/components/FormItem";
import Page from "@/components/Page";
import { useTitle } from "@/contexts/VendorContext";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import { rules } from "@/pages/auth/register/rules";
import useCropsQuery from "@/query/queries/useCropsQuery";
import { Avatar, Input, Select } from "antd";
import { all } from "axios";

export default function Profile() {
  const { data: crops, isLoading: fetchingCrops } = useCropsQuery();
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
              Transaction <br /> Rated
            </div>
          </div>
          <div className="m-2 flex-1 text-lg font-bold">
            4.6
            <div className="text-sm font-thin leading-tight">Rated</div>
          </div>
        </div>
        <div className="flex w-full items-center gap-2 p-4">
          <div className="flex h-full flex-grow flex-col leading-4">
            <span className="text-xl font-bold">Juan Paolo Ortega</span>

            <span className="text-slate-500">Local Store name</span>
          </div>
          <button className="rounded bg-[#739559] px-2 text-white">
            Edit your profile
          </button>
        </div>
        <div className="w-full px-4">
          <div>
            <label className="font-normal">Address:</label>
            <Input
              disabled
              style={{ backgroundColor: "#fff" }}
              className=" font-normal"
              placeholder="djwandjan"
            ></Input>
          </div>
          <div className="mt-4">
            <label className="font-normal">Mobile Number:</label>
            <Input
              disabled
              style={{ backgroundColor: "#fff" }}
              className="bg-white font-normal"
              placeholder="djwandjan"
            ></Input>
          </div>

          <div className="mt-4">
            <label className="font-normal">Email:</label>
            <Input
              disabled
              style={{ backgroundColor: "#fff" }}
              className=" font-normal"
              placeholder="djwandjan"
            ></Input>
          </div>

          <div className="mt-4">
            <div className="font-medium">Store information</div>
            <label className="font-normal">Store Name:</label>
            <Input
              disabled
              style={{ backgroundColor: "#fff" }}
              className=" font-normal"
              placeholder="Mundo Store"
            ></Input>
          </div>
          <div className="mt-4">
            <label className="font-normal">Store Location:</label>
            <Input
              disabled
              style={{ backgroundColor: "#fff" }}
              className=" font-normal"
              placeholder="Poblacion Uno Guadalupe Makati City"
            ></Input>
          </div>

          <div className="mt-4 flex w-full flex-col">
            <div className="inline-block w-full text-justify font-light">
              You can customize your interests by editing your preferences,
              which will help you easily discover the commodities that you are
              interested in.
            </div>
            <div>
              <FormItem rules={rules.crops} name="crops">
                <Select
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
              </FormItem>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
