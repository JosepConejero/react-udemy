export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=9PpZg7PR6iMjge3340smxVG8vPxsR0rc&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  //(gifs);
  return gifs;
};
