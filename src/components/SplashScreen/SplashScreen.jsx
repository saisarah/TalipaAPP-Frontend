import logo from "./images/logo.svg";

export default function SplashScreen() {
  return (
    <div className="grid-col mx-auto grid min-h-screen max-w-md place-content-center bg-primary-accent-2 p-4 px-8 text-center">
      <img
        className="mr-auto "
        src={logo}
        width="600"
        height="auto"
        alt="splash_logo"
      />
    </div>
  );
}
