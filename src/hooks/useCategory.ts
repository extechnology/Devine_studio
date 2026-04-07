import { useQuery } from "@tanstack/react-query";
import getCategory from "../services/category/getCategory";
import { Category } from "../services/category/category.type";

const useCategories = () =>
  useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategory,
  });

export default useCategories;
