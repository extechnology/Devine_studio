import axiosInstance from "../../api/axiosInstance";

const getBanners = async () => {
  const response = await axiosInstance.get("/api/banner-images/");
  return response.data;
};

export default getBanners;
