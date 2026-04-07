import axiosInstance from "../../api/axiosInstance";


const getHero = async () => {
    const response = await axiosInstance.get("api/hero-carousel/");
    return response.data;
}

export default getHero;