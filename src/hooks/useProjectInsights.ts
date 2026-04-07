import { useQuery } from "@tanstack/react-query";
import getProjectInsights from "../services/home/getProjectInsights";
import type { ProjectInsight } from "../services/home/types.home";

const useProjectInsights = () => {
    return useQuery<ProjectInsight[]>({  
        queryKey: ["project-insights"],
        queryFn: getProjectInsights,
    });
}

export default useProjectInsights;