import axiosInstance from "./axiosInstance";

const fetchDummy = async () => {
  try {
    const { data } = await axiosInstance({
      url: "/dummy/data.json",
      method: "GET",
    });
    console.log(data);
    return data;
  } catch (e) {
    new Error("Fail to Fetch");
  }
};

export default fetchDummy;
