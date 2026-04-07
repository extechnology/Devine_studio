import axiosInstance from "../../api/axiosInstance";

const getDirectorProfiles = async () => {
    const response = await axiosInstance.get("api/director-profile/");
    return response.data;
}

export default getDirectorProfiles;