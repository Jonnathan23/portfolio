import { Skills } from "../db/skills";


export default function MySkills() {
    return (
        <section>
            <h2>Mis Habilidades</h2>
            <p>Como programador Full Stack, tengo experiencia trabajando con un ecosistema de tecnologías que cubren todo el ciclo de desarrollo.</p>

            <div className="skills-container">
                <article className="skill-category">
                    <h3>Frontend</h3>
                    <ul>
                        {Skills.frontend.map((skillUrl, index) => (
                            <li key={index}>
                                <div><img width="50px" src={skillUrl} alt={`Frontend Skill ${index + 1}`} /></div>
                            </li>
                        ))}
                    </ul>
                </article>
                <article className="skill-category">
                    <h3>Backend</h3>
                    <ul>
                        {Skills.backend.map((skillUrl, index) => (
                            <li key={index}>
                                <div><img width="50px" src={skillUrl} alt={`Backend Skill ${index + 1}`} /></div>
                            </li>
                        ))}
                    </ul>
                </article>
                <article className="skill-category">
                    <h3>Bases de Datos</h3>
                    <ul>
                        {Skills.dataBase.map((skillUrl, index) => (
                            <li key={index}>
                                <div><img width="50px" src={skillUrl} alt={`Database Skill ${index + 1}`} /></div>
                            </li>
                        ))}
                    </ul>
                </article>
                <article className="skill-category">
                    <h3>Herramientas y Control de Versiones</h3>
                    <ul>
                        {Skills.tools.map((skillUrl, index) => (
                            <li key={index}>
                                <div><img width="50px" src={skillUrl} alt={`Tool Skill ${index + 1}`} /></div>
                            </li>
                        ))}
                    </ul>
                </article>
            </div>
        </section>
    );
}
