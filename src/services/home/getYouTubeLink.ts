import axiosInstance from "../../api/axiosInstance";

const getYouTubeLink = async () => {
    const response = await axiosInstance.get("api/youtube-links/");
    return response.data;
}

export default getYouTubeLink;