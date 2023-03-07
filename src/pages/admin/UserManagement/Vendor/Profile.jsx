import { Card, Col, Row } from "antd";

export default function Profile1() {
  return (
    <>
      <div className="rounded bg-white p-4">
        <h1>Vendors Profile</h1>

        <div className="my-4 flex flex-grow justify-around gap-4">
          <div>
            <img
              src="https://via.placeholder.com/200"
              className="rounded-full"
            />
          </div>

          <div className="my-2 flex-col">
            <h1>Personal Details</h1>
            <hr />
            <p>Name</p>
            <h1>Joshua VIllanueva</h1>
            <p>Gender</p>
            <h1>Male</h1>
            <p>Phone</p>
            <h1>+63 976 007 0541</h1>
            <p>Email</p>
            <h1>lorem@gmail.com</h1>
            <p>Address</p>
            <h1>
              Zamboanga del Sur, Zamboanga City, G/F Interco Building, N. S.
              Valderrosa Street
            </h1>
          </div>
          <div className="my-2 flex-col">
            <h1>Vendors Details</h1>
            <hr />
            <p>Vendor Area</p>
            <h1>5 - hectares</h1>
            <p>Vendor Type</p>
            <h1>Irrigated</h1>
            <p>Ownership type</p>
            <h1>Registered Owner</h1>
          </div>
        </div>
      </div>
    </>
  );
}
