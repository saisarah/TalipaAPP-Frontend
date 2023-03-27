import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { Table } from "antd";
import { dataRegion, columnsRegion } from "./post-data";

export default function Commodities() {
  return (
    <Page className=" bg-white p-2">
      <PageHeader back="/farmer/home/" title="Banana" />

      <Table
        dataSource={dataRegion}
        columns={columnsRegion}
        pagination={false}
      />
    </Page>
  );
}
