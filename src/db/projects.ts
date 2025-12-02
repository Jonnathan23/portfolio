import type { ProjectData } from "../types";
import { GenerateUUID } from "../utils/GenerateUUID";
import { Tecnologies } from "./tecnologies";


export const allProjects: ProjectData[] = [

    {
        id: GenerateUUID.generate(),
        linkGitHub: "https://github.com/Jonnathan23/uptask-frontend",
        linkImage: "img/projects/uptask_MERN.png",
        title: "UpTask",
        description: "UpTask es una aplicación para administrar tus tareas diarias.",
        linksSkills: [Tecnologies.vite, Tecnologies.react]
    },
    {
        id: GenerateUUID.generate(),
        linkWeb: "https://receta-bebidas-js.netlify.app/",
        linkGitHub: "https://github.com/Jonnathan23/recetas-bebidas",
        linkImage: "img/projects/cocktail.png",
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
        linkImage: "img/projects/pacientes_zustand.png",
        strong: "Proyecto de seguimiento de pacientes",
        description: " en este proyecto se demuestra el uso de Zustand",
        linksSkills: [Tecnologies.vite, Tecnologies.react, Tecnologies.zustand]
    },
    {
        id: GenerateUUID.generate(),
        title: "Control Gastos",
        linkWeb: "https://control-gastos-react-js.netlify.app/",
        linkGitHub: "https://github.com/Jonnathan23/control-gastos",
        linkImage: "img/projects/control_gastos_miniatura_frontend.png",
        strong: "Proyecto de control de gastos",
        description: " el proyecto consiste en una aplicación para controlar tus gastos en base a categorías de gastos, actualmente se está expandiendo el proyecto",
        linksSkills: []
    },
    {
        id: GenerateUUID.generate(),
        title: "Uptask Backend",
        linkGitHub: "https://github.com/Jonnathan23/backend-ups-task",
        linkImage: "img/projects/uptask_backend.png",
        strong: "Proyecto de backend en NodeJS",
        description: "en este proyecto se demuestra el uso de Node.js y Express y uso de ODNM",
        linksSkills: []
    },
    {
        id: GenerateUUID.generate(),
        linkGitHub: "https://github.com/Jonnathan23/Rest_api_node_ts_server",
        linkImage: "img/projects/control_gastos_miniatura.png",
        title: "Rest API",
        strong: "Proyecto de REST API con PERN",
        description: " en este proyecto se demuestra el uso de Node.js y Express con testing",
        linksSkills: []
    },
]