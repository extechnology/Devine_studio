import { useQuery } from "@tanstack/react-query";
import getServiceCategory from "../services/serviceSection/getServiceCategory";
import { ServiceSection } from "../services/serviceSection/service.type";

const useServiceCategory = () => {
    return useQuery<ServiceSection[]>({
        queryKey: ["service-category"],
        queryFn: getServiceCategory,
    })
}

export default useServiceCategory;