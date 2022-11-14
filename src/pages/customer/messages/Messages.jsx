function Messages({displayPhoto}){
  return (


    <div className=" p-3 flex  bg-white drop-shadow-xl rounded-xl ">
  
  {/* Display Photo */}
      <div className="flex-none w-18 h-18 ">
          <img
            src={displayPhoto}
            className=" h-full w-full rounded-full "
          />
      </div>

{/* Messages */}
      <div className=" px-4 flex-auto text-xl text-black font-extrabold ">
        <div>
         Maria Clara  
        </div>
        <div className="flex-none max-h-5 font-thin text-sm flex-wrap ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
         
        </div>
        
      </div>

      
    </div>

   

  );
}

export default function DisplayPhoto()
{
  return (
    <div className="p-4 mt-5">

    <div className="mt-1 flex flex-col gap-4">
      <Messages displayPhoto="https://via.placeholder.com/59x59"/>
      <Messages displayPhoto="https://via.placeholder.com/59x59" />
      <Messages displayPhoto="https://via.placeholder.com/59x59" />
      <Messages displayPhoto="https://via.placeholder.com/59x59" />
      <Messages displayPhoto="https://via.placeholder.com/59x59" />
      <Messages displayPhoto="https://via.placeholder.com/59x59" />
      <Messages displayPhoto="https://via.placeholder.com/59x59" />
      <Messages displayPhoto="https://via.placeholder.com/59x59"/>
      <Messages displayPhoto="https://via.placeholder.com/59x59" />
      <Messages displayPhoto="https://via.placeholder.com/59x59" />
      <Messages displayPhoto="https://via.placeholder.com/59x59" />
    </div>
  </div>
 
  );
}