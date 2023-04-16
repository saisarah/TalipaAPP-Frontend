import { Avatar } from "antd";
import usBg from "../images/usBg.svg";
import uno from "../images/pao.jpg";
import rei from "../images/rei.jpg";
import ruel from "../images/ruel.jpg";
import sai from "../images/sai.jpg";
import lhatz from "../images/lhatz.jpg";
import josh from "../images/josh.jpg";
import lenard from "../images/lenard.jpg";

import { LinkedinOutlined } from "@ant-design/icons";

export default function Developers() {
  return (
    <section className="mx-auto h-auto w-11/12 max-w-6xl">
      <div className="mb-4 w-full text-center text-5xl font-bold text-black dark:text-white">
        Who's behind
      </div>
      <div
        style={{
          backgroundImage: `url(${usBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="grid h-auto gap-4 gap-x-4 rounded-md px-5 py-10 md:grid-cols-3 md:gap-y-20 md:py-16"
      >
        <a
          href="https://www.linkedin.com/in/saisarah/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex justify-between rounded-md bg-white p-2 ">
            <div className="flex gap-4">
              <Avatar size={60} src={sai} />
              <div className="text-xl font-bold  leading-5 text-black">
                Sarah Grace Oben
                <br />{" "}
                <span className="text-sm font-thin text-gray-600">
                  Project Manager/Backend
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <LinkedinOutlined className="justify-center text-xl text-[#0077B5]" />
              <div className="text-xs text-black underline">Follow</div>
            </div>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/john-lenard-mangay-ayam-738162249/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex justify-between rounded-md bg-white p-2 ">
            <div className="flex gap-4">
              <Avatar size={60} src={lenard} />
              <div className="text-xl font-bold  leading-5 text-black">
                Lenard Mangay Ayam
                <br />
                <span className="text-sm font-thin text-gray-600">
                  Full Stack Developer
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <LinkedinOutlined className="justify-center text-xl text-[#0077B5]" />
              <div className="text-xs text-black underline">Follow</div>
            </div>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/juan-paolo-ortega-2bb162241/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex justify-between rounded-md bg-white p-2 ">
            <div className="flex gap-4">
              <Avatar size={60} src={uno} />
              <div className="text-xl font-bold  leading-5 text-black">
                Juan Paolo Ortega
                <br />
                <span className="text-sm font-thin text-gray-600">
                  Front-end Developer
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <LinkedinOutlined className="justify-center text-xl text-[#0077B5]" />
              <div className="text-xs text-black underline">Follow</div>
            </div>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/villanueva-joshua-0558a1272/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex justify-between rounded-md bg-white p-2 ">
            <div className="flex gap-4">
              <Avatar size={60} src={josh} />
              <div className="text-xl font-bold  leading-5 text-black">
                Joshua Villanueva
                <br />
                <span className="text-sm font-thin text-gray-600">
                  Front-end Developer
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <LinkedinOutlined className="justify-center text-xl text-[#0077B5]" />
              <div className="text-xs text-black underline">Follow</div>
            </div>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/ruel-almonia-681941243"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex justify-between rounded-md bg-white p-2 ">
            <div className="flex gap-4">
              <Avatar size={60} src={ruel} />
              <div className="text-xl font-bold  leading-5 text-black">
                Ruel Almonia
                <br />{" "}
                <span className="text-sm font-thin text-gray-600">
                  Front-end Developer
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <LinkedinOutlined className="justify-center text-xl text-[#0077B5]" />
              <div className="text-xs text-black underline">Follow</div>
            </div>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/jhunriz-b-lalata-036a6b272/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex justify-between rounded-md bg-white p-2 ">
            <div className="flex gap-4">
              <Avatar size={60} src={lhatz} />
              <div className="text-xl font-bold  leading-5 text-black">
                Jhunriz Lalata
                <br />{" "}
                <span className="text-sm font-thin text-gray-600">
                  Fron-end Developer
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <LinkedinOutlined className="justify-center text-xl text-[#0077B5]" />
              <div className="text-xs text-black underline">Follow</div>
            </div>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/reilly-kyle-rubante-720167142"
          rel="noopener noreferrer"
          target="_blank"
          className="md:col-start-2"
        >
          <div className="flex justify-between rounded-md bg-white p-2 ">
            <div className="flex gap-4">
              <Avatar size={60} src={rei} />
              <div className="text-xl font-bold  leading-5 text-black">
                Reilly Rubante
                <br />{" "}
                <span className="text-sm font-thin text-gray-600">
                  QA Specialist
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <LinkedinOutlined className="justify-center text-xl text-[#0077B5]" />
              <div className="text-xs text-black underline">Follow</div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
