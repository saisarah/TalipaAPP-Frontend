import talipaAppFooter from "../images/talipaAppFooter.svg";
import fb from "../images/fb.png";
import github from "../images/github.png";
import footerBg from "../images/footerBg.png";

export default function Footer() {
  return (
    <section className="relative z-20 mx-auto mt-16 h-auto w-11/12 max-w-6xl">
      <div className="grid  grid-cols-5 gap-y-5">
        <div className="col-span-5 md:col-span-1">
          <div>
            <img src={talipaAppFooter} alt="" className="w-36 md:w-full" />
          </div>
          <div className="text-justify text-xs font-thin text-black dark:text-white">
            Stay connected with TalipaApp to learn how we're changing the
            commodity market industry by connecting farmers and vendors to
            provide fresh and affordable commodities directly to market. Join us
            in our mission to improve access to quality products for everyone.
          </div>

          <div className="mt-10 flex gap-7">
            <a href="https://www.facebook.com/TalipaAPP">
              <img src={fb} alt="" />
            </a>
            <a href="https://github.com/saisarah/TalipaAPP-Frontend">
              <img src={github} alt="" />
            </a>
          </div>
        </div>

        <div className="col-span-2 col-start-1 md:col-span-1 md:col-start-3 md:mt-16">
          <div className="text-base font-semibold text-black dark:text-white">
            Where to find us?
          </div>

          <div className="mt-4">
            Q23J+R9M, Barangay 171 Congressional Rd Ext Caloocan, Metro Manila
          </div>
        </div>

        <div className="col-span-2 col-start-4 md:col-span-1  md:mt-16 ">
          <div className="text-base font-semibold text-black dark:text-white">
            Our Contacts
          </div>

          <div className="mt-4">
            <div>+63 929 770 9043 </div>
            <div> talipaapp@gmail.com</div>
          </div>
        </div>

        <div className="col-span-3 md:col-span-1 md:mt-16">
          <div className="text-base font-semibold text-black dark:text-white">
            Help
          </div>

          <div className="mt-4">
            <div>
              <a href="">Help & Support</a>
            </div>
            <div>
              <a href="">Terms & Conditions</a>
            </div>
            <div>
              <a href="">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          © <span className="text-[#86BF88]">Talipa</span>App2023 All rights
          reserved
        </div>
      </div>
    </section>
  );
}
