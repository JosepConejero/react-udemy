/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
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
  };

  return {
    images: images,
    isLoading: isLoading,
    deleteHandler: deleteHandler,
  };
};
