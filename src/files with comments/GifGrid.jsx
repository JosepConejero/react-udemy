import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  /* const gifs = [1, 2, 3, 4, 5, 6, 7, 8, 9]; */
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    /* getGifs(category).then((newImages) => setImages(newImages)); */
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      {/* <p>Hola, mierda de mundo</p> */}
      {/* {gifs.map((gif) => (
        <p>{gif}</p>
      ))} */}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image}
            /* title={image.title} 
            url={image.url} */
          />
        ))}
      </div>
    </>
  );
};
