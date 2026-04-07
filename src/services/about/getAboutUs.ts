import axiosInstance from "../../api/axiosInstance";

const getAboutUs = async () => {
    const response = await axiosInstance.get("api/about-us/");
    return response.data;
}

export default getAboutUs;