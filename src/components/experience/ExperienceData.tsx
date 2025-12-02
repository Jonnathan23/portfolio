import type { ExperienceData } from "../../types";

type ExperienceDataProps = Omit<ExperienceData, 'id'>

export default function ExperienceDataComponent({ nameEnterprise, srcImage, date, description, responsibilities, skills, tecnologies }: ExperienceDataProps) {

    const { frontend, backend, dataBase, tools } = tecnologies;

    const renderTechCategory = (techs: string[], label: string) => {
        if (techs.length === 0) return null;

        return (<p><strong>{label}:</strong> {techs.join(", ")}</p>);
    };

    return (
        <article className="experience-card">
            <div className="card-header">
                <div className="experience-card-logo">
                    {srcImage ? (
                        <img src={srcImage} alt={`${nameEnterprise} logo`} className="company-logo" />
                    ) : (
                        <div className="logo-placeholder"></div>
                    )}
                </div>
                <div className="header-content">
                    <h3 className="experience-card-title">{nameEnterprise}</h3>
                    <p className="experience-card-subtitle">{date}</p>
                </div>
            </div>

            <div className="card-details">
                <p className="experience-card-description">{description}</p>

                <div className="details-section">
                    <h4>Responsabilidades:</h4>
                    <ul>
                        {responsibilities.map((responsibility, index) => (
                            <li key={`${nameEnterprise}_res_${index}`}>{responsibility}</li>
                        ))}
                    </ul>
                </div>

                <div className="details-section">
                    <h4>Tecnologías:</h4>
                    <div className="tech-tags">
                        {renderTechCategory(frontend, "Frontend")}
                        {renderTechCategory(backend, "Backend")}
                        {renderTechCategory(dataBase, "DB")}
                        {renderTechCategory(tools, "Tools")}
                    </div>
                </div>

                <div className="details-section">
                    <h4>Aptitudes:</h4>
                    <div className="skills-container">
                        {skills.map((skill, index) => (
                            <span key={`${nameEnterprise}_skill_${index}`} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
