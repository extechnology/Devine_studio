import { useQuery } from "@tanstack/react-query";
import getBanners from "../services/bannerImages/getBanner";
import type { BannerImages } from "../services/bannerImages/banner.type";

const useBannerImages = () => {
  return useQuery<BannerImages[]>({
    queryKey: ["banners"],
    queryFn: getBanners,
  });
};

export default useBannerImages;
