import axiosInstance from "../../api/axiosInstance";

const getProjectInsights = async () => {
    const response = await axiosInstance.get("api/project-insights/");
    return response.data;
}

export default getProjectInsights;