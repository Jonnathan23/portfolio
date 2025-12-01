import type { ExperienceData } from "../../types";


export default function ExperienceDataComponent({ nameEnterprise, date, description, responsibilities, skills, tecnologies }: ExperienceData) {

    const { frontend, backend, dataBase, tools } = tecnologies;
    return (
        <section>
            <h2>{nameEnterprise}</h2>
            <article>
                <h3>{date}</h3>
                <p>{description}</p>
            </article>

            <article>
                <h3>Mis Responsabilidades Clave:</h3>
                <ul>
                    {responsibilities.map((description, index) => (
                        <li key={`res_${index}`}>{description}</li>
                    ))}
                </ul>
            </article>

            <article>
                <h3>Tecnologías Utilizadas:</h3>
                <div>
                    {frontend.length > 0 &&
                        <p><strong>Frontend:</strong> {
                            frontend.map((tech, index) => (
                                <span key={`tech_${index}`}>{`${tech}, `}</span>
                            ))
                        }</p>
                    }

                    {backend.length > 0 &&
                        <p><strong>Backend:</strong> {
                            backend.map((tech, index) => (
                                <span key={`tech_${index}`}>{`${tech}, `}</span>
                            ))
                        }</p>
                    }

                    {dataBase.length > 0 &&
                        <p><strong>Base de Datos:</strong> {
                            dataBase.map((tech, index) => (
                                <span key={`tech_${index}`}>{`${tech}, `}</span>
                            ))
                        }</p>
                    }

                    {tools.length > 0 &&
                        <p><strong>Herramientas:</strong> {
                            tools.map((tech, index) => (
                                <span key={`tech_${index}`}>{`${tech}, `}</span>
                            ))
                        }</p>
                    }
                </div>
            </article>

            <article>
                <h3>Aptitudes</h3>
                <div>
                    {skills.map((skill, index) => (
                        <p key={`skill_${index}`}>{skill}</p>
                    ))}
                </div>
            </article>
        </section>
    );
}
