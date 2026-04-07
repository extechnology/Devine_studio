import axiosInstance from "../../api/axiosInstance";

const getAboutContents = async () => {
    const response = await axiosInstance.get("api/about-us-contents/");
    return response.data;
}

export default getAboutContents;