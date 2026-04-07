import { useQuery } from "@tanstack/react-query";
import getGallery from "../services/gallery/getGallery";
import type { Gallery } from "../services/gallery/gallery.type";

const useGallery = () =>
  useQuery<Gallery[]>({
    queryKey: ["gallery"],
    queryFn: getGallery,
  });

export default useGallery;