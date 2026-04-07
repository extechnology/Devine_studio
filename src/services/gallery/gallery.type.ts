
export interface Gallery {
  id: number;
  title: string;
  description: string;
  images: GalleryImage[];
  is_main_image: boolean;
  created_at: string;
}

export interface GalleryImage {
  id: number;
  image: string;
  title: string;
  is_main_image: boolean;
}