import { Table } from "antd";
import { columnsCommodities, dataCommodities } from "./post-data";

export const Demands = () => {
  return (
    <div className=" bg-white p-2">
      {/* IF EMPTY
            <Empty description="Nothing has been posted yet" /> */}
      <Table
        dataSource={dataCommodities}
        columns={columnsCommodities}
        pagination={false}
      />
    </div>
  );
};
