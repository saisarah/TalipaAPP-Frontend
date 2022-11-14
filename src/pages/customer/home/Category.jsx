export default function Category({ image, name }) {
  return (
    <div
      className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-lg bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute bottom-0 w-full bg-slate-800 p-2 font-semibold text-white">
        {name}
      </div>
    </div>
  );
}