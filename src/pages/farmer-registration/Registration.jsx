import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div className="mx-auto min-h-screen max-w-md">
      <div className="group relative flex flex-col items-center">
        <Link to="/information">
          <img
            src="/assets/images/vendor.png"
            AW
            alt="vendor"
            className="w-auto bg-gray-900 object-cover text-white"
          />
        </Link>
        <img
          src="/assets/images/logo.png"
          alt="logo"
          className="absolute top-5 left-10"
        />
        <Link to="/information">
        <div class="absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center bg-transparent opacity-0 duration-500 group-hover:h-full group-hover:opacity-100">
          
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white">
              Vendor
            </h1>
          
        </div>
        </Link> 
      </div>
      <div className="relative flex flex-col items-center">
        <img
          src="/assets/images/farmer.png"
          alt="vendor"
          className="w-auto bg-gray-900 text-white"
        />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white">
          Farmer
        </h1>
      </div>
    </div>
  );
}
