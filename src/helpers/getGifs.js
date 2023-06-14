export const getGifs = async (category) => {
  const key = "7zMU7YrFvLmNIJmmYhizoejA1f07ESnF";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=10`;

  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((obj) => ({
    id: obj.id,
    title: obj.title,
    url: obj.images.downsized_medium.url,
  }));
  return gifs;
};
