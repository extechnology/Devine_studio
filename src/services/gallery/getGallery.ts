import axiosInstance from "../../api/axiosInstance";

const getGallery = async () => {
  const response = await axiosInstance.get("api/gallery/");
  return response.data;
};

export default getGallery;
