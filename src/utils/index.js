export const getImagePath = (name) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href;
};
