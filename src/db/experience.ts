import type { ExperienceData } from "../types";
import { GenerateUUID } from "../utils/GenerateUUID";
import { NameTecnologies } from "./tecnologies";



export const myExperience: ExperienceData[] = [
    {
        id: GenerateUUID.generate(),
        nameEnterprise: "Proyecto: Aplicación Web Full-Stack para el Registro de la Propiedad",
        srcImage: "img/experience/registro_propiedad.jpeg",
        date: "Prácticas Preprofesionales (Marzo 2025 - Julio 2025)",
        description: "Durante mis prácticas preprofesionales, desarrollé una solución web integral desde cero para el Registro de la Propiedad. El objetivo principal del proyecto era facilitar el proceso de los detalles de pago de la empresa a sus empleados, junto con la generación de documentos necesarios para el banco, mejorando la eficiencia y la productividad de dicho proceso.",
        responsibilities: [
            "Desarrollo del Backend: Creación de una API RESTful robusta y segura utilizando Node.js y Express para manejar toda la lógica de negocio y la comunicación con el servidor.",
            "Desarrollo del Frontend Implementación de una interfaz de usuario moderna, dinámica y responsiva con React, creando componentes reutilizables para una experiencia de usuario fluida.",
            "Gestión de Base de Datos: Diseño y modelado de la base de datos relacional en PostgreSQL. Utilicé Sequelize para gestionar las consultas y la persistencia de datos de manera eficiente.",
            "Control de Versiones: Administración de todo el código fuente del proyecto y colaboración mediante flujos de trabajo en Git."
        ],
        skills: ["Node.js", "Express", "React", "PostgreSQL", "Sequelize", "Git", "MVC"],
        tecnologies: {
            frontend: [NameTecnologies.react, NameTecnologies.typescript, NameTecnologies.html, NameTecnologies.css],
            backend: [NameTecnologies.node, NameTecnologies.typescript, NameTecnologies.express],
            dataBase: [NameTecnologies.postgresql, NameTecnologies.typescript],
            tools: [NameTecnologies.git, NameTecnologies.github, NameTecnologies.postman]
        },
    }
]
