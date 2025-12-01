import type { ExperienceData } from "../../types";

type ExperienceDataProps = Omit<ExperienceData, 'id'>

export default function ExperienceDataComponent({ nameEnterprise, date, description }: ExperienceDataProps) {

    return (
        <article className="experience-card">
            <div className="experience-card-logo">
                {/* Placeholder para el logo de la empresa */}
                <div className="logo-placeholder"></div>
            </div>
            <div className="experience-card-content">
                <h3 className="experience-card-title">{nameEnterprise}</h3>
                <p className="experience-card-subtitle">{date}</p>
                <p className="experience-card-description">{description}</p>
            </div>
        </article>
    );
}
