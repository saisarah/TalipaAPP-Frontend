import PageHeader from "@/components/PageHeader";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, InputNumber, Select } from "antd";
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
    <div className="app-size">
      <PageHeader back="/farmer" title="Create Post" />

      <div className="flex p-2">
        <div className="flex grow flex-col gap-2 p-4">
          <p>Description</p>
          <Input />
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
          <InputNumber
            defaultValue={1000}
            formatter={(value) =>
              `₱ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            onChange={onChange}
          />
          <div className="p-5 text-center">
            <div className="text-center">
              <p>Quantity: {quantity}</p>
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
    </div>
  );
}
