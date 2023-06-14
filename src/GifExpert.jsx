import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GifExpert = () => {
  const [categories, setCategories] = useState(["Dragon Ball", "Pokemon"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <div>
        <h5 className="title">Get gif</h5>
        <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      </div>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      <ol></ol>
    </>
  );
};
