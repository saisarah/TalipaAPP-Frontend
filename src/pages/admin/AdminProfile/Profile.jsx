import { EditOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <>
      <Card
        className="mb-3 p-4"
        title={<p className="font-bold uppercase">Account Information</p>}
        extra={
          <Button type="primary">
            <Link to="/admin/profile/update">
              <EditOutlined />
              Update information
            </Link>
          </Button>
        }
      >
        <div className="mb-3 grid grid-cols-3 gap-4 border-b-2">
          <div>
            <img
              src="https://via.placeholder.com/200"
              className="mb-3 rounded-full"
            />
          </div>
          <div className="col-span-2">
            <p className="text-lg font-bold uppercase">joshua villanueva</p>
            <p>
              <span className="text-primary">villanuevajoshua27@gmail.com</span>
              <span> - Administrator</span>
            </p>
          </div>
        </div>

        <div className="mb-3 grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <p className="font-bold uppercase">Gender</p>
          </div>
          <div className="col-span-2">
            <p>Male</p>
          </div>
        </div>
        <div className="mb-3 grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <p className="font-bold uppercase">Birthday</p>
          </div>
          <div className="col-span-2">
            <p>January 23, 2019</p>
          </div>
        </div>
        <div className="mb-3 grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <p className="font-bold uppercase">Contact number</p>
          </div>
          <div className="col-span-2">
            <p>+639 140 1847</p>
          </div>
        </div>
        <div className="mb-3 grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <p className="font-bold uppercase">Address</p>
          </div>
          <div className="col-span-2">
            <p>A. Bonifacio Ave. Brgy. Sto. Domingo Cainta Rizal</p>
          </div>
        </div>
      </Card>
    </>
  );
}
