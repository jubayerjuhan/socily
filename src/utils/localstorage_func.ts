export const storeAtLocalstorage = (key: string, data: string) => {
  localStorage.setItem(key, `${data}`);
};
export const getLocalstorageData = (key: any) => {
  const data = localStorage.getItem(key);
  return data;
};
