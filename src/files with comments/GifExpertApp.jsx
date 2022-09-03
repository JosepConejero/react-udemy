import { useState } from "react";
import { AddCategory } from "./componentes/AddCategory";
import { GifGrid } from "./componentes/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  /*  const onAddCategory = () => {
    //setCategories([...categories, "Valorant"]);
    setCategories((cat) => [...cat, "Valorant"]);
  }; */

  const onAddCategory = (newCategory) => {
    //setCategories((cat) => [...cat, newCategory]);
    if (categories.includes(newCategory)) return; // si encuentra la categoría, no la añade otra vez
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/*título*/}
      <h1>GifExpertApp</h1>
      {/*input*/}
      {/* <AddCategory categories={categories} setCategories={setCategories} /> */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/* mando la referencia a la función*/}
      {/*listado de gif*/}
      {/*  <button onClick={onAddCategory}>Agregar</button> */}
      {/* <ol> */}
      {categories.map((category) => (
        /* {<li key={category}>{category}</li>} */
        /*   <div key={category}>
            <h3>{category}</h3>
            <li>{category}</li>
          </div> */
        <GifGrid key={category} category={category} />
      ))}
      {/* </ol> */}
      {/*git item*/}
    </>
  );
};
