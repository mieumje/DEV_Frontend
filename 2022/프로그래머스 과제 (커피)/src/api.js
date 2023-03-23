const API_END_POINT =
  "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev";

export const request = async (url = "") => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`);

    if (!res.ok) throw new Error("API REQUEST ERROR");

    return await res.json();
  } catch (e) {
    console.error(e);
  }
};
