import logo from "./images/talipaapp2.svg";

export default function LoadingScreen() {
  return (
    <div className="bg-white">
      <div className="mx-auto flex h-screen max-w-md flex-col items-center justify-center">
        <img src={logo} className="h-3/4" />
      </div>
    </div>
  );
}
