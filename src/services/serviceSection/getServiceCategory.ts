import axiosInstance from "../../api/axiosInstance";

const getServiceCategory = async( ) => {
    const response = await axiosInstance.get("api/services/");
    return response.data
}

export default getServiceCategory;