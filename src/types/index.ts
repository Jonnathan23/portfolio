
export interface ProjectData {
    id: string;
    linkGitHub: string;
    linkWeb?: string;
    linkImage?: string;
    linksSkills: string[];
    title: string;
    strong?: string;
    description: string;

}

export interface SkillsData {
    frontend: string[];
    backend: string[];
    dataBase: string[];
    tools: string[];

}

interface tecnologieExperience {
    frontend: string[];
    backend: string[];
    dataBase: string[];
    tools: string[];
}

export interface ExperienceData {
    id:string;
    nameEnterprise: string;
    date: string;
    description: string;
    responsibilities: string[];
    skills: string[];
    tecnologies: tecnologieExperience;
    
}