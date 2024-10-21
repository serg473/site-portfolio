export const getImagePath = (name) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href;
};

//Copy text clipboard
export const copyTextClipboard = async (textToCopy) => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    alert("Текст скопирован в буфер обмена!");
  } catch (err) {
    console.error("Ошибка при копировании текста: ", err);
  }
};
