import { useQuery } from "@tanstack/react-query";
import type { AboutContents } from "../services/about/types.about";
import getAboutContents from "../services/about/getAboutContents";

const useAboutContents = () =>
    useQuery<AboutContents[]>({
        queryKey: ["about-contents"],
        queryFn: getAboutContents,
    });

export default useAboutContents;