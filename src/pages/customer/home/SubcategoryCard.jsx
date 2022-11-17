import { Link } from "react-router-dom";


export default function SubcategoryCard({ name, image }) {
  return (
    <div className="bg-white p-4 text-center shadow">
      <Link
        to="/categories/1"
        className="mb-2 block font-semibold text-current"
      >
        {name}
      </Link>
      <div className="aspect-square w-full rounded bg-slate-400"></div>
    </div>
  );
}