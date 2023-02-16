import PageHeader from "@/components/PageHeader";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, InputNumber, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";

export default function Posting() {
  const provinceData = ["Zhejiang", "Jiangsu"];
  const cityData = {
    Zhejiang: ["Banana", "Manggo", "Onion"],
    Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
  };
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };
  const onChange = (value) => {
    console.log("changed", value);
  };
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="app-size bg-white">
      <PageHeader back="/farmer" title="Create Post" />

      <div className="flex p-2">
        <div className="flex grow flex-col gap-2 p-4 font-semibold">
          <p>Description</p>
          <TextArea rows={4} />
          <p>Commodity</p>
          <Select
            value={secondCity}
            onChange={onSecondCityChange}
            options={cities.map((city) => ({
              label: city,
              value: city,
            }))}
          />

          <p>Budget</p>
          <div className="flex">
            <div className="flex grow">
              <InputNumber
                style={{ width: "100%" }}
                defaultValue={1000}
                formatter={(value) =>
                  `₱ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="p-5 text-center">
            <div className="text-center font-semibold">
              <p>Quantity: {quantity} kg</p>
            </div>
            <div className="">
              <button onClick={() => setQuantity(quantity + 1)}>
                <Button className="mr-2">
                  <PlusOutlined />
                </Button>
              </button>
              <button onClick={() => setQuantity(quantity - 1)}>
                <Button>
                  <MinusOutlined />
                </Button>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button type="primary" style={{ width: "90%" }}>
          Next
        </Button>
      </div>
    </div>
  );
}
