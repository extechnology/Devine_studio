export interface DirectorProfile {
  id: number;
  name: string;
  role: string;
  image: string;
  is_primary:boolean;
  description: string;
  type: string;
}

export interface AboutUs {
  id: number;
  title: string;
  sub_title:string;
  description: string;
  images: {
    id: number;
    image: string;
    is_main: boolean;
  }[];
}

export interface AboutContents {
    id: number;
    title: string;
    description: string;
    image: string;
}