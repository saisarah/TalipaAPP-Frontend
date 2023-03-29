import {
  FacebookFilled,
  GithubFilled,
  InstagramFilled,
} from "@ant-design/icons";
import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState, useEffect } from "react";

export default function Contact() {
  const [value, setValue] = useState("");

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section
      id="Contact"
      className="mx-auto mt-0 h-auto w-screen max-w-7xl sm:mt-20"
    >
      {isSmallScreen ? (
        <div>
          <div className="grid w-full grid-rows-1 gap-6 rounded  bg-white p-4  ">
            <div className="text-base font-bold text-black">CONTACT FORM</div>
            <div>
              <Input placeholder="Name" />
            </div>

            <div>
              <Input placeholder="Number" />
            </div>

            <div>
              <Input placeholder="Email" />
            </div>

            <TextArea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Type here..."
              autoSize={{
                minRows: 3,
                maxRows: 5,
              }}
            />

            <button className="mt-10 rounded-sm bg-[#333333] p-1 pl-6 pr-6 text-center text-white">
              Send Message —
            </button>
          </div>

          <div className="mt-4 grid grid-cols-2 p-4  sm:grid-cols-1 ">
            <div>
              <div className="mb-5 font-semibold text-black">OUR ADDRESS</div>
              <div>Q23J+R9M, Barangay 171</div>
              <div> Congressional Rd Ext</div>
              <div>Caloocan, Metro Manila</div>
            </div>
            <div>
              <div className="mb-5 font-semibold text-black">OUR CONTACTS</div>
              <div>0929 770 9043</div>
              <div>talipaapp@gmail.com</div>
            </div>
            <div className="mt-10 inline-flex justify-start gap-4 sm:justify-center ">
              <div>
                <FacebookFilled style={{ fontSize: "25px" }} />
              </div>
              <div>
                <GithubFilled style={{ fontSize: "25px" }} />
              </div>
              <div>
                <InstagramFilled style={{ fontSize: "25px" }} />
              </div>
            </div>
            <div className="mt-10 text-right">—— Follow us</div>
          </div>
        </div>
      ) : (
        <div className=" h-96 w-full rounded border">
          <div className="relative h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.256176868798!2d121.02872021449994!3d14.754592077240687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1cc9c9c83e9%3A0x303a03298da24ddb!2sUniversity%20of%20Caloocan%20City%20-%20Congressional%20Campus!5e0!3m2!1sen!2sph!4v1680078112802!5m2!1sen!2sph"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute grid   w-full gap-6 rounded  bg-white p-4  sm:right-20 sm:-top-10 sm:w-[500px]">
              <div className="text-base font-bold text-black">CONTACT FORM</div>
              <div>
                <Input placeholder="Name" />
              </div>

              <div>
                <Input placeholder="Number" />
              </div>

              <div>
                <Input placeholder="Email" />
              </div>

              <TextArea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Type here..."
                autoSize={{
                  minRows: 3,
                  maxRows: 5,
                }}
              />

              <button className="mt-10 rounded-sm bg-[#333333] p-1 pl-6 pr-6 text-center text-white">
                Send Message —
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-4  ">
              <div>
                <div className="mb-5 font-semibold text-black">OUR ADDRESS</div>
                <div>Q23J+R9M, Barangay 171</div>
                <div> Congressional Rd Ext</div>
                <div>Caloocan, Metro Manila</div>
              </div>
              <div>
                <div className="mb-5 font-semibold text-black">
                  OUR CONTACTS
                </div>
                <div>0929 770 9043</div>
                <div>talipaapp@gmail.com</div>
              </div>
              <div className="mt-10 inline-flex justify-center gap-4 text-right">
                <div>
                  <FacebookFilled style={{ fontSize: "25px" }} />
                </div>
                <div>
                  <GithubFilled style={{ fontSize: "25px" }} />
                </div>
                <div>
                  <InstagramFilled style={{ fontSize: "25px" }} />
                </div>
              </div>
              <div className="mt-10 text-right">—— Follow us</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
