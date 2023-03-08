export default function Profile() {
  return (
    <>
      <div className="bg-white p-4">
        <div className="flex gap-6">
          <div>
            <img
              src="https://via.placeholder.com/300"
              className="rounded-full"
            />
          </div>
          <div className="flex-col">
            <h1>Name</h1>
            <p>Joshua Villanueva</p>
            <h1>Gender</h1>
            <p>Male</p>
            <h1>Email</h1>
            <p>villanuevajoshua27@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
