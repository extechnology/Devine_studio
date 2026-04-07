import { useQuery } from "@tanstack/react-query";
import type { AboutUs } from "../services/about/types.about";
import getAboutUs from "../services/about/getAboutUs";

const useAboutUs = () =>
    useQuery<AboutUs[]>({
        queryKey: ["about-us"],
        queryFn: getAboutUs,
    });

export default useAboutUs;