const storage = {
  getItem(key: string) {
    let encodedData: unknown = "";
    const data = localStorage.getItem(key);

    try {
      if (data) encodedData = JSON.parse(data);
    } catch {
      encodedData = localStorage.getItem(key);
    }

    return encodedData;
  },
  setItem(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  removeItem(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  },
  clear() {
    localStorage.clear();
  },
};

export default storage;
