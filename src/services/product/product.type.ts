
import type { Category } from "../category/category.type";

export interface Product {
    id: number;
    name: string;
    category: Category;
    category_name: string;
    description: string;
    price: number;
    old_price: number;
    warranty: string;
    image: string;
    created_at: string;
}