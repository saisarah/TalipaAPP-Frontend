import { Button, Card } from "antd";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <Card
        className="p-4"
        title={<p className="font-bold uppercase">Account Information</p>}
        extra={
          <Button type="primary">
            <Link to="/admin/farmer-groups/profile/update">Update information</Link>
          </Button>
        }
      >
        <div className="grid grid-rows-2">
          <div className="my-3 grid grid-cols-3 gap-4 border-b-2">
            <div>
              <img
                src="https://via.placeholder.com/200"
                className="mb-3 rounded-full"
              />
            </div>
            <div className="col-span-2">
              <p className="text-lg font-bold uppercase">joshua villanueva</p>
              <p>
                <span className="text-primary">
                  villanuevajoshua27@gmail.com
                </span>
                <span> - Administrator</span>
              </p>
            </div>
          </div>

          <div className="my-3 grid grid-cols-3 gap-4 pb-3">
            <div>
              <p className="font-bold">Gender</p>
              <p className="font-bold">Birthday</p>
              <p className="font-bold">Contact number</p>
              <p className="font-bold">Address</p>
              <p className="font-bold">Account created</p>
            </div>
            <div className="col-span-2">
              <p>Male</p>
              <p>January 23, 2000</p>
              <p>+63 976 140 1847</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>July 23, 2019</p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
