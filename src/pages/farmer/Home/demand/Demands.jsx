import { Table } from "antd";
import {
  columnsCommodities,
  dataCommodities,
} from "@/components/Demands/post-data";

export const Demands = () => {
  return (
    <div className=" bg-white p-2">
      <Table
        dataSource={dataCommodities}
        columns={columnsCommodities}
        pagination={false}
      />
    </div>
  );
};
