export interface CurriculumItem {
    id: string;
    name: string;
    summary: string;
    description: string;
    ageGroup: string;
    duration: string;
    thumbnail: string;
    highlights: string[];
}

export interface Guru {
    id: string;
    name: string;
    title: string;
    specialization: string;
    bio: string;
    experience: string;
    photo: string;
    achievements: string[];
}

export interface ParamparaEntry {
    id: string;
    name: string;
    period: string;
    title: string;
    description: string;
    photo: string;
    contributions: string[];
}

export interface EventItem {
    id: string;
    title: string;
    date: string;
    description: string;
    type: "concert" | "workshop" | "festival" | string;
    thumbnail: string;
    gallery: string[];
    videoUrl: string;
}
