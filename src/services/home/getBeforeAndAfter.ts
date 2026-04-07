import axiosInstance from "../../api/axiosInstance";

const getBeforeAndAfter = async () => {
    const response = await axiosInstance.get("api/before-and-after/");
    return response.data;
}

export default getBeforeAndAfter;