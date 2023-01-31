function About({ title, addInfo, descriptions })
// const descriptions = new Map([
//   ["Mango"],
//   ["Banana"]
// ]);
 {
  return (
    <div>
      <div className="mx-4 my-4">
        <h1 className="text-lg font-bold">{title}</h1>
        <button className="text-[#739559] text-base">{addInfo}</button>
        <hr />
        <div className="my-2 flex">
          <Avatar className="w-10 h-10 flex-shrink-0" />
          <span className="mx-2 flex flex-grow text-base">{descriptions}</span>
          <EditOutlined style={{ fontSize: "25px" }} />
        </div>
        <hr/>
      </div>
    </div>
  );
}

export default function ResetPassword() {
  return (
    <div>
      <div className="mx-auto min-h-screen max-w-md bg-white">
        <PageHeader back="/#" title="About" />
        <div>
          <About
            title={"Work"}
            addInfo={"Add Work Experience"}
            descriptions={
              "Former Member of Calabarzon Mango and Banana Seller Association"
            }
          />
          </div>
          <div>
          <About
            title={"Education"}
            addInfo={"Add College/University"}
            descriptions={
              "Studied at University of Caloocan City"
            }
          />
        </div>
        <div>
          <About
            title={"Place lived"}
            addInfo={"Add Town/City"}
            descriptions={
              "Caloocan City"
            }
          />
        </div>
        <div>
          <About
            title={"Commodity"}
            addInfo={"Add Commodity"}
            descriptions={
              ["Mango"]
            }
          />
        </div>
      </div>
    </div>
  );
}