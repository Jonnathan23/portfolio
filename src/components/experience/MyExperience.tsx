import { myExperience } from "../../db/experience";
import ExperienceData from "./experienceData";

export default function MyExperience() {
    return (
        <section>
            <h3>Mi experiencia</h3>
            {myExperience.map((experience) => (
                <ExperienceData
                    nameEnterprise={experience.nameEnterprise}
                    date={experience.date}
                    description={experience.description}
                    responsibilities={experience.responsibilities}
                    skills={experience.skills}
                    tecnologies={experience.tecnologies}
                />
            ))
            }
        </section>
    );
}
