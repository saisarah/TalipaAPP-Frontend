export default function SplashScreen() {
  return (
    <div class="grid-col mx-auto grid min-h-screen max-w-md place-content-center bg-primary p-4 px-8 text-center">
      <img
        className="mr-auto"
        src="/assets/splash logo.png"
        alt="splash_logo"
      />

      {/* <h1 className="-m-2 font-nerko text-6xl  text-white">
        <span class="inline-flex items-center">
          <img
            className="mr-auto"
            src="/assets/logo_splash.png"
            width="208"
            height="368"
            alt=""
          />
          <span>alipaApp</span>
        </span>
      </h1> */}
    </div>
  );
}
