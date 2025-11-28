import { allProjects } from "../db/projects";
import ProyectDescription from "./ProyectDescription"

export default function MyProyects() {

    return (
        <section>
            <h2>Proyectos</h2>
            <div>
                {allProjects.map((project) => (
                    <ProyectDescription
                        linkGitHub={project.linkGitHub}
                        linkImage={project.linkImage}
                        title={project.title}
                        linksSkills={project.linksSkills}
                    >
                        <p>
                            <strong>{project.strong}</strong>
                            {project.description}
                        </p>
                    </ProyectDescription>
                ))
                }
            </div>
        </section >
    );
}
