import axiosInstance from "../../api/axiosInstance";

const getHomeImageAndText = async () => {
    const response = await axiosInstance.get("api/home-page-text-and-image/");
    return response.data;
}

export default getHomeImageAndText;