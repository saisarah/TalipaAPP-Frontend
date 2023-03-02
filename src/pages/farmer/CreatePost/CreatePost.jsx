import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { Steps } from "antd";
import { useState } from "react";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";

export default function CreatePost() {
  const [step, setStep] = useState(0);

  return (
    <Page className="bg-white">
      <PageHeader back="/farmer/home" title="Create Post" />

      <div className="border-b">
        <Steps
          responsive={false}
          className=""
          onChange={(n) => setStep((step) => Math.min(n, step))}
          size="small"
          current={step}
          type="navigation"
          items={[
            { title: "Step 1" },
            { title: "Step 2" },
            { title: "Step 3" },
          ]}
        />
      </div>

      <div className="max-w-screen flex overflow-x-hidden">
        <Form1 step={step} setStep={setStep} />
        <Form2 step={step} setStep={setStep} />
        <Form2 step={step} setStep={setStep} />
      </div>
    </Page>
  );

  // return (
  //   <Page className="bg-slate-50">
  //     <PageHeader back="/farmer/home?tab=create" title="Create Post" />
  //     <div className="p-4">
  //       <Form layout="vertical" onFinish={handleSubmit}>
  //         <FormItem rules={required()} label="Commodity">
  //           <Select
  //             placeholder="Select Commodity"
  //             options={crops}
  //             size="large"
  //             className="rounded"
  //             loading={fetchingCrops}
  //           />
  //         </FormItem>

  //         <FormItem rules={required()} label="Title" name="title">
  //           <Input size="small" />
  //         </FormItem>

  //         <FormItem
  //           rules={required()}
  //           label="Delivery Options"
  //           name="delivery_options"
  //         >
  //           <Select
  //             required
  //             placeholder="Select Available Delivery Options"
  //             options={[{ value: "Pick-up" }, { value: "Transportify" }]}
  //             size="large"
  //             mode="multiple"
  //             className="rounded"
  //             loading={fetchingCrops}
  //           />
  //         </FormItem>

  //         <FormItem
  //           rules={required()}
  //           label="Payment Options"
  //           name="payment_options"
  //         >
  //           <Select
  //             required
  //             placeholder="Select Available Payment Options"
  //             options={[{ value: "GCash" }, { value: "Cash" }]}
  //             size="large"
  //             mode="multiple"
  //             className="rounded"
  //             loading={fetchingCrops}
  //           />
  //         </FormItem>

  //         <FormItem label="Unit" name="unit" initialValue={selectedUnit}>
  //           <Select
  //             className="rounded"
  //             size="large"
  //             value={selectedUnit}
  //             onChange={(unit) => setSelectedUnit(unit)}
  //           >
  //             <Select.Option value="kg">Kilogram</Select.Option>
  //             <Select.Option value="pc">Piece</Select.Option>
  //           </Select>
  //         </FormItem>

  //         <FormItem
  //           label="Pricing Type"
  //           name="is_straight"
  //           initialValue={isStraight}
  //         >
  //           <Select
  //             className="rounded"
  //             size="large"
  //             value={isStraight}
  //             onChange={(isStraight) => setIsStraight(isStraight)}
  //           >
  //             <Select.Option value={1}>Straight</Select.Option>
  //             <Select.Option value={0}>Not Straight</Select.Option>
  //           </Select>
  //         </FormItem>

  //         {Boolean(isStraight) && (
  //           <div className="grid grid-cols-2 gap-4">
  //             <FormItem
  //               className="hidden"
  //               name="sizes"
  //               size="large"
  //               inputProps={{ value: "__default" }}
  //             />
  //             {/* <input type="hidden" name="sizes[0]" value="__default" /> */}
  //             <FormItem
  //               label="Total Stocks"
  //               name="stock"
  //               size="large"
  //               inputProps={{ addonAfter: selectedUnit }}
  //             />
  //             <FormItem
  //               label="Price"
  //               size="large"
  //               name="price"
  //               inputProps={{ addonAfter: `/${selectedUnit}` }}
  //             />
  //           </div>
  //         )}
  //         <FormItem rules={required()} label="Details" name="details">
  //           <Input.TextArea
  //             size="large"
  //             className="rounded"
  //             placeholder="Add a short description"
  //           />
  //         </FormItem>

  //         <FormItem label="Add Photos">
  //           <Upload
  //             onRemove={(file) => {
  //               setAttachments((attachments) => {
  //                 return attachments.filter((a) => a !== file);
  //               });
  //             }}
  //             fileList={attachments}
  //             beforeUpload={(file) => {
  //               setAttachments((files) => [...files, file]);
  //               return false;
  //             }}
  //             className="grid grid-cols-1"
  //           >
  //             <Button icon={<UploadOutlined />} size="large" block>
  //               Click to Upload
  //             </Button>
  //           </Upload>
  //         </FormItem>

  //         {!isStraight && (
  //           <PricingForm
  //             unit={selectedUnit}
  //             sizes={sizes}
  //             setSizes={setSizes}
  //           />
  //         )}
  //         <Button
  //           className="mt-4"
  //           htmlType="submit"
  //           block
  //           type="primary"
  //           size="large"
  //           loading={isLoading}
  //         >
  //           Post
  //         </Button>
  //       </Form>
  //     </div>
  //   </Page>
  // );
}
