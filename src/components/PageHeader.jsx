export default function PageHeader({ title }) {
  return (
    <div className="sticky top-0 grid h-16 grid-cols-12 items-center bg-white px-4 shadow-sm">
      <div className="col-span-2">
        <img src="/assets/images/logo.png" className="h-16" />
      </div>
      <div className="col-span-8 text-center">
        <span className="text-2xl font-bold">{ title }</span>
      </div>
    </div>
  );
}
