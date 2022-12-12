export default function Invitation({ profileName, src, organizationProduct }) {
  return (
    <>
    <div className="text-lg text-center h-56 grid grid-cols-1 tracking-tighter content-end">
      <h1>Group Invitation</h1>
      <p>From <b>{profileName}</b></p>
      <div className="h-[72px] w-[72px] flex-shrink-0 rounded-full m-auto bg-slate-300"></div>
      
    </div>

    <img class="rounded-full py-5" src={src} alt="" />

        <div className="text-md text-center mx-11">
             <p><b>{profileName}</b> has sent you an invitation to join <b>{organizationProduct}</b> 
             <br /> Do you want to join?
            </p>
        </div>
        
    </>
    
    
  );
}