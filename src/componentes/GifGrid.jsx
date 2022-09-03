import { useFetchGifs } from "../hooks/useFetchGifs";
//import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
//import { useFetchGifs, GifItem } from "../indexes/varios.js"; // este lo he creado yo
//import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading, deleteHandler } = useFetchGifs(category);

  /* const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  const deleteHandler = (id) => {
    const newImages = images.filter((image) => image.id !== id);
    setImages(newImages);
  }; */

  return (
    <>
      <h3>{category}</h3>
      {/* {isLoading ? <h2>Cargando...</h2> : null} */}
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            onDelete={() => deleteHandler(image.id)}
            {...image}
          />
        ))}
      </div>
    </>
  );
};
