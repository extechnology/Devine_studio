import { useQuery } from "@tanstack/react-query";
import getDedicatedService from "../services/home/getDedicatedService";
import type { DedicatedService } from "../services/home/types.home";

const useDedicatedServices = () => {
    return useQuery<DedicatedService[]>({
        queryKey: ["dedicated-services"],
        queryFn: getDedicatedService,
    });
}

export default useDedicatedServices;