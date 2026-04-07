export interface Hero {
    id: number;
    title: string;
    description: string;
    image: string;
    created_at: string; 
}

export interface HomeImageAndText {
    id: number;
    title: string;
    description: string;
    image: string;
    created_at: string; 
}

export interface BeforeAndAfter {
    id: number;
    before:string;
    after:string;
    created_at: string;
}

export interface DedicatedService {
    id: number;
    title: string;
    description: string;
    image: string;
    created_at: string;
}

export interface ProjectInsight {
    id: number;
    title: string;
    description: string;
    image: string;
    created_at: string;
}

export interface YouTubeLink {
    link:string;
    created_at: string;
}