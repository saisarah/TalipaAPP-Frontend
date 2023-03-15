import { Button } from "antd";

import { Link } from "react-router-dom";

export const Demands = () => {
  return (
    <div className=" bg-white p-2">
      {/* <Table
        dataSource={dataCommodities}
        columns={columnsCommodities}
        pagination={false}
      /> */}
      <div className="mt-8 w-full p-4 text-center">
        <span>
          Add Your Monthly Commodity Demand Here (Note: Only one demand can be
          submitted per month)
        </span>
        <Link to="/demands/create">
          <Button size="large" type="primary" className="mt-4 rounded" block>
            Add Demand
          </Button>
        </Link>
      </div>
    </div>
  );
};
