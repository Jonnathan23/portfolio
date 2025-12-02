import { myExperience } from "../../db/experience";
import ExperienceDataComponent from "./ExperienceData";


export default function MyExperience() {
    return (
        <section className="experience-section">
            <h2 className="experience-title">Experiencia</h2>
            <div className="experience-timeline">
                <div className="timeline-line"></div>
                {myExperience.map((experience) => (
                    <ExperienceDataComponent
                        key={experience.id}
                        nameEnterprise={experience.nameEnterprise}
                        srcImage={experience.srcImage}
                        date={experience.date}
                        description={experience.description}
                        responsibilities={experience.responsibilities}
                        skills={experience.skills}
                        tecnologies={experience.tecnologies}
                    />
                ))}
            </div>
            <div className="carousel-indicators">
                <span className="indicator active"></span>
                <span className="indicator"></span>
                <span className="indicator"></span>
                <span className="indicator"></span>
            </div>
        </section>
    );
}
