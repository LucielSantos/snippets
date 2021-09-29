const storagePrefixKey = "@platform/";

/** Function to save data on `local`/`session` storage */
export const setItemStorage = (
  key: string,
  value: any,
  inSessionStorage: boolean = false
) => {
  const newKey = `${storagePrefixKey}${key}`;
  const jsonValue = JSON.stringify(value);

  if (inSessionStorage) {
    sessionStorage.setItem(newKey, jsonValue);
  } else {
    localStorage.setItem(newKey, jsonValue);
  }

  return true;
};

export const getItemStorage = (
  key: string,
  inSessionStorage: boolean = false
) => {
  const newKey = `${storagePrefixKey}${key}`;
  let value = null;

  if (inSessionStorage) {
    value = sessionStorage.getItem(newKey);
  } else {
    value = localStorage.getItem(newKey);
  }

  return value ? JSON.parse(value) : null;
};

export const clearStorage = (inSessionStorage: boolean = false) =>
  inSessionStorage ? sessionStorage.clear() : localStorage.clear();
