import axiosInstance from "../../api/axiosInstance";

const getDedicatedService = async () => {
    const response = await axiosInstance.get("api/dedicated-services/");
    return response.data;
}

export default getDedicatedService;