export interface ServiceSection {
  id: number;
  service_name: string;
  category_name: string;
  name: string;
  images: {
    id: number;
    image: string;
    is_main: boolean;
  }[];
}