
export default function CategoryTab({ selectedCategory, setSelectedCategory, categories }) {
  return (
    <div className="talipaapp-scrollbar sticky top-0 flex overflow-x-auto bg-white px-4 pt-2 shadow">
      {categories.map(({ name }, i) => (
        <button
          onClick={() => setSelectedCategory(i)}
          key={name}
          className={`whitespace-nowrap border-b-2 px-4 py-2 ${
            selectedCategory === i
              ? "border-primary text-primary"
              : "border-white"
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}