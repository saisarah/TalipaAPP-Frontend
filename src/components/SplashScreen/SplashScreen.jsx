import logo from "./images/logo.svg";

export default function SplashScreen() {
  return (
    <div className="bg-primary-accent-2">
      <div className="grid-col mx-auto grid min-h-screen max-w-md place-content-center  p-4 px-8 text-center">
        <img
          className="mr-auto "
          src={logo}
          width="600"
          height="auto"
          alt="splash_logo"
        />
      </div>
    </div>
  );
}
