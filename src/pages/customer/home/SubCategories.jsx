import { Empty, Spin } from "antd";
import SubcategoryCard from "./SubcategoryCard";


export default function SubCategories({ category, isLoading }) {
  const { subcategory } = category;

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spin size="large" tip="Fetching data"/>
      </div>
    )
  }

  if (subcategory.length === 0) {
    return <Empty />;
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {subcategory.map(({ name, image }) => (
        <SubcategoryCard key={name} name={name} image={image} />
      ))}
    </div>
  );
}