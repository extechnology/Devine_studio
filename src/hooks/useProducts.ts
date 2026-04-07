import { useQuery } from "@tanstack/react-query";
import getProducts from "../services/product/getProducts";
import { Product } from "../services/product/product.type";

const useProducts = () =>
  useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

export default useProducts;
