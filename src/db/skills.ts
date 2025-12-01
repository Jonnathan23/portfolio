import type { SkillsData } from "../types";
import { Tecnologies } from "./tecnologies";



export const Skills: SkillsData = {
    frontend: [
        Tecnologies.react,
        Tecnologies.vite,
        Tecnologies.html,
        Tecnologies.css,
        Tecnologies.typescript,
        Tecnologies.angular,
        Tecnologies.reactNative,
        Tecnologies.zustand,
    ],
    backend: [
        Tecnologies.node,
        Tecnologies.jest,
    ],
    dataBase: [
        Tecnologies.postgresql,
        Tecnologies.mongodb,
    ],
    tools: [
        Tecnologies.git,
        Tecnologies.github,
        Tecnologies.bitbucket,
    ]

}