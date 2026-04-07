import axiosInstance from "../../api/axiosInstance";

const getCategory = async () => {
  const response = await axiosInstance.get("api/categories/");
  return response.data;
};


export default getCategory;