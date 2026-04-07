import { useQuery } from "@tanstack/react-query";
import getBeforeAndAfter from "../services/home/getBeforeAndAfter";
import type { BeforeAndAfter } from "../services/home/types.home";

const useBeforeAndAfter = () => {
    return useQuery<BeforeAndAfter[]>({  
        queryKey: ["before-and-after"],
        queryFn: getBeforeAndAfter,
    });
}

export default useBeforeAndAfter;