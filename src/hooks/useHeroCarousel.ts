import { useQuery } from "@tanstack/react-query";
import getHero from "../services/home/getHero";
import type { Hero } from "../services/home/types.home";

const useHeroCarousel = () => {
    return useQuery<Hero[]>({
        queryKey: ["hero-carousel"],
        queryFn: getHero,
    });
}

export default useHeroCarousel;