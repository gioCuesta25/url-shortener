import ShortUniqueId from "short-unique-id";

export const generateRandomShortId = () => {
  const shortId = new ShortUniqueId({ length: 10 });
  return shortId.rnd();
};

export const urlCleaner = (url: string) => {};
