import { useQuery } from "@tanstack/react-query";
import getHomeImageAndText from "../services/home/getHomeImageAndText";
import type { HomeImageAndText } from "../services/home/types.home";

const useImageAndText = () => {
    return useQuery<HomeImageAndText[]>({  
        queryKey: ["home-image-and-text"],
        queryFn: getHomeImageAndText,
    });
}

export default useImageAndText;