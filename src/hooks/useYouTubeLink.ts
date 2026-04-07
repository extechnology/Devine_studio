import { useQuery } from "@tanstack/react-query";
import getYouTubeLink from "../services/home/getYouTubeLink";
import type { YouTubeLink } from "../services/home/types.home";

const useYouTubeLink = () => {
    return useQuery<YouTubeLink[]>({  
        queryKey: ["youtube-link"],
        queryFn: getYouTubeLink,
    });
}

export default useYouTubeLink;