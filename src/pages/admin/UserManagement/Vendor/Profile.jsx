import { Card } from "antd";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <Card
        className="mb-3 p-4"
        title={<p className="font-bold uppercase">Vendor Information</p>}
      >
        <div className="mb-3 grid grid-cols-3 gap-4 border-b-2">
          <div>
            <img
              src="https://via.placeholder.com/200"
              className="mb-3 rounded-full"
            />
          </div>
          <div className="col-span-2">
            <p className="text-lg font-bold uppercase">
              Joshua Alfaro Villanueva
            </p>
            <p>
              <Link
                class="text-primary"
                to="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=villanuevajoshua27@gmail.com"
                target="_blank"
              >
                villanuevajoshua27@gmail.com
              </Link>
              <Link to="tel:+63 976 007 0541"> | +63 976 007 0541</Link>
            </p>
            <p>Male</p>
            <p>
              Zamboanga del Sur, Zamboanga City, G/F Interco Building, N. S.
              Valderrosa Street
            </p>
          </div>
        </div>

        <div className="mb-3 grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <p className="font-bold uppercase">Market place</p>
          </div>
          <div className="col-span-2">
            <p>225 N. Garcia Street, Makati City</p>
          </div>
        </div>
        <div className="mb-3 grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <p className="font-bold uppercase">Commodities</p>
          </div>
          <div className="col-span-2">
            <p>Banana | Eggplant</p>
          </div>
        </div>
      </Card>
    </>
  );
}
