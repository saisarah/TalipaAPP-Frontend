export default function Invitation({ profileName, src, organizationProduct }) {
  return (
    <>
      <div className="grid h-56 grid-cols-1 content-end text-center text-lg tracking-tighter">
        <h1>Group Invitation</h1>
        <p>
          From <b>{profileName}</b>
        </p>
        <div className="m-auto h-[72px] w-[72px] flex-shrink-0 rounded-full bg-slate-300"></div>
      </div>

      <img class="rounded-full py-5" src={src} alt="" />

      <div className="text-md mx-11 text-center">
        <p>
          <b>{profileName}</b> has sent you an invitation to join{" "}
          <b>{organizationProduct}</b>
          <br /> Do you want to join?
        </p>
      </div>
    </>
  );
}
