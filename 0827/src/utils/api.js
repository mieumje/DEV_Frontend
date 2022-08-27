export const request = async (path = "") => {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error("fail to fetch");

    return res.json();
  } catch (e) {
    console.error(e);
  }
};
