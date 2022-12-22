import {SearchOutlined} from "@ant-design/icons";

function Messages({user, displayphoto}){
  return (
    <div className="">
      <div className="">
        <div className="border-b m-2">
          <ul className="">
            <li className="">
              <a href="" className="w-full flex gap-2 items-center"> 
              <span className="">
                <img className="rounded-full" src={displayphoto} alt="" />
              </span>
              <div className="flex flex-col h-full flex-grow leading-4">
                <span className="text-xl font-bold">{user}</span>
                <span className="">No unread messages</span>
              </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function user()
{
  return (
    <div className="bg-white ">
      <div className="px-4 flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold ">Messages</h1>
      </div>
      <div className="py-2 px-4">
          <div className="flex gap-2 rounded bg-slate-200 p-3">
            <SearchOutlined
              style={{ fontSize: 20 }}
              className="text-slate-500"
            />
            <input
              className="flex-grow bg-transparent focus:outline-none"
              type="search"
              placeholder="Search for fruits, vegetables, etc..."
            />
          </div>
      </div>

      <Messages user="Maria Clara" displayphoto="https://via.placeholder.com/59x59"/>
      <Messages user="Padre Damaso" displayphoto="https://via.placeholder.com/59x59"/>
      <Messages user="Juan Crisostomo Ibarra"displayphoto="https://via.placeholder.com/59x59"/>
      <Messages user="Elías" displayphoto="https://via.placeholder.com/59x59"/>
      <Messages user="Father Salví" displayphoto="https://via.placeholder.com/59x59"/>
      <Messages user="The Ensign" displayphoto="https://via.placeholder.com/59x59"/>
      <Messages user="Doña Consolación" displayphoto="https://via.placeholder.com/59x59"/>
      <Messages user="Don Rafael Ibarra" displayphoto="https://via.placeholder.com/59x59"/>
      <Messages user="Crispín"  displayphoto="https://via.placeholder.com/59x59"/>
      <Messages user="Basilio"  displayphoto="https://via.placeholder.com/59x59"/>
      <Messages user="Doctor Tiburcio de Espadaña" displayphoto="https://via.placeholder.com/59x59"/>
      <Messages user="Lt. Guevara" displayphoto="https://via.placeholder.com/59x59"/>
    </div>
  );
}

