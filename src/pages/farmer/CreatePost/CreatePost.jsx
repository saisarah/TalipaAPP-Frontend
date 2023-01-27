import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Upload } from "antd";
import { useState } from "react";
import { allSizes, PricingForm } from "./components/PricingForm";
import { useCreatePost } from "./useCreatePost";
import { required } from "./rules";
import PageHeader from "@/components/PageHeader";
import useCropsQuery from "@/query/queries/useCropsQuery";
import FormItem from "@/components/FormItem";
import Page from "@/components/Page";

export default function CreatePost() {
  const { data: crops, isLoading: fetchingCrops } = useCropsQuery({
    select: (data) => data.map(({ name, id }) => ({ value: id, label: name })),
  });

  const [sizes, setSizes] = useState([
    {
      size: allSizes[0],
      price: null,
      stock: null,
    },
  ]);

  const [selectedUnit, setSelectedUnit] = useState("kg");
  const [isStraight, setIsStraight] = useState(false);
  const [attachments, setAttachments] = useState([]);

  const { handleSubmit, isLoading } = useCreatePost(attachments, sizes);

  return (
    <Page className="bg-slate-50">
      <PageHeader back="/farmer/home?tab=create" title="Create Post" />
      <div className="p-4">
        <Form layout="vertical" onFinish={handleSubmit}>
          <FormItem rules={required()} label="Commodity" name="crop_id">
            <Select
              placeholder="Select Commodity"
              options={crops}
              size="large"
              className="rounded"
              loading={fetchingCrops}
            />
          </FormItem>

          <FormItem rules={required()} label="Title" name="title" />

          <FormItem
            rules={required()}
            label="Delivery Options"
            name="delivery_options"
          >
            <Select
              required
              placeholder="Select Available Delivery Options"
              options={[{ value: "Pick-up" }, { value: "Transportify" }]}
              size="large"
              mode="multiple"
              className="rounded"
              loading={fetchingCrops}
            />
          </FormItem>

          <FormItem
            rules={required()}
            label="Payment Options"
            name="payment_options"
          >
            <Select
              required
              placeholder="Select Available Payment Options"
              options={[{ value: "GCash" }, { value: "Cash" }]}
              size="large"
              mode="multiple"
              className="rounded"
              loading={fetchingCrops}
            />
          </FormItem>

          <FormItem label="Unit" name="unit" initialValue={selectedUnit}>
            <Select
              className="rounded"
              size="large"
              value={selectedUnit}
              onChange={(unit) => setSelectedUnit(unit)}
            >
              <Select.Option value="kg">Kilogram</Select.Option>
              <Select.Option value="pc">Piece</Select.Option>
            </Select>
          </FormItem>

          <FormItem
            label="Pricing Type"
            name="is_straight"
            initialValue={isStraight}
          >
            <Select
              className="rounded"
              size="large"
              value={isStraight}
              onChange={(isStraight) => setIsStraight(isStraight)}
            >
              <Select.Option value={1}>Straight</Select.Option>
              <Select.Option value={0}>Not Straight</Select.Option>
            </Select>
          </FormItem>

          {Boolean(isStraight) && (
            <div className="grid grid-cols-2 gap-4">
              <FormItem
                className="hidden"
                name="sizes"
                inputProps={{ value: "__default" }}
              />
              {/* <input type="hidden" name="sizes[0]" value="__default" /> */}
              <FormItem
                label="Total Stocks"
                name="stock"
                inputProps={{ addonAfter: selectedUnit }}
              />
              <FormItem
                label="Price"
                name="price"
                inputProps={{ addonAfter: `/${selectedUnit}` }}
              />
            </div>
          )}
          <FormItem rules={required()} label="Details" name="details">
            <Input.TextArea
              size="large"
              className="rounded"
              placeholder="Add a short description"
            />
          </FormItem>

          <FormItem label="Add Photos">
            <Upload
              onRemove={(file) => {
                setAttachments((attachments) => {
                  return attachments.filter((a) => a !== file);
                });
              }}
              fileList={attachments}
              beforeUpload={(file) => {
                setAttachments((files) => [...files, file]);
                return false;
              }}
              className="grid grid-cols-1"
            >
              <Button icon={<UploadOutlined />} size="large" block>
                Click to Upload
              </Button>
            </Upload>
          </FormItem>

          {!isStraight && (
            <PricingForm
              unit={selectedUnit}
              sizes={sizes}
              setSizes={setSizes}
            />
          )}
          <Button
            className="mt-4"
            htmlType="submit"
            block
            type="primary"
            size="large"
            loading={isLoading}
          >
            Post
          </Button>
        </Form>
      </div>
    </Page>
  );
}
