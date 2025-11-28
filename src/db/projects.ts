import type { ProjectData } from "../types";
import { GenerateUUID } from "../utils/GenerateUUID";

export const Tecnologies = {
    vite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",

    html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    angular: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original-wordmark.svg",
    reactNative: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg",
    zustand: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-plain.svg",

    node: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
    jest: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",

    postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg",
    mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",

    git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
    bitbucket: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg"
}

export const allProjects: ProjectData[] = [

    {
        id: GenerateUUID.generate(),
        linkGitHub: "https://github.com/Jonnathan23/uptask-frontend",
        linkImage: "img/uptask_MERN.png",
        title: "UpTask",
        description: "UpTask es una aplicación para administrar tus tareas diarias.",
        linksSkills: [Tecnologies.vite, Tecnologies.react]
    },
    {
        id: GenerateUUID.generate(),
        linkWeb: "https://receta-bebidas-js.netlify.app/",
        linkGitHub: "https://github.com/Jonnathan23/recetas-bebidas",
        linkImage: "img/cocktail.png",
        title: "Cocktail",
        strong: "Proyecto de recetas de bebidas",
        description: " en este proyecto se utilizó la API de CocktailDB",
        linksSkills: [Tecnologies.react, Tecnologies.vite]

    },

    {
        id: GenerateUUID.generate(),
        title: "Pacientes Zustand",
        linkWeb: "https://pacientes-veterinaria-zustand.netlify.app/",
        linkGitHub: "https://github.com/Jonnathan23/pacientes-zustand",
        linkImage: "img/pacientes_zustand.png",
        strong: "Proyecto de seguimiento de pacientes",
        description: " en este proyecto se demuestra el uso de Zustand",
        linksSkills: [Tecnologies.vite, Tecnologies.react, Tecnologies.zustand]
    },
    {
        id: GenerateUUID.generate(),
        title: "Control Gastos",
        linkWeb: "https://control-gastos-react-js.netlify.app/",
        linkGitHub: "https://github.com/Jonnathan23/control-gastos",
        linkImage: "img/control_gastos_miniatura_frontend.png",
        strong: "Proyecto de control de gastos",
        description: " el proyecto consiste en una aplicación para controlar tus gastos en base a categorías de gastos, actualmente se está expandiendo el proyecto",
        linksSkills: []
    },
    {
        id: GenerateUUID.generate(),
        title: "Uptask Backend",
        linkGitHub: "https://github.com/Jonnathan23/backend-ups-task",
        linkImage: "img/uptask_backend.png",
        strong: "Proyecto de backend en NodeJS",
        description: "en este proyecto se demuestra el uso de Node.js y Express y uso de ODNM",
        linksSkills: []
    },
    {
        id: GenerateUUID.generate(),
        linkGitHub: "https://github.com/Jonnathan23/Rest_api_node_ts_server",
        linkImage: "img/control_gastos_miniatura.png",
        title: "Rest API",
        strong: "Proyecto de REST API con PERN",
        description: " en este proyecto se demuestra el uso de Node.js y Express con testing",
        linksSkills: []
    },
]