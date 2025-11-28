import ProyectDescription from "./ProyectDescription"

export default function MyProyects() {


    return (
        <section>
            <h2>Proyectos</h2>
            <div>
                <ProyectDescription
                    linkGitHub="https://github.com/Jonnathan23/uptask-frontend"
                    linkImage="img/uptask_MERN.png"
                    title="UpTask"
                >
                    <p>UpTask es una aplicación para administrar tus tareas diarias.</p>
                </ProyectDescription>

                <ProyectDescription
                    linkWeb="https://receta-bebidas-js.netlify.app/"
                    linkGitHub="https://github.com/Jonnathan23/recetas-bebidas"
                    linkImage="img/cocktail.png"
                    title="Cocktail"
                >
                    <p>
                        <strong>Proyecto de recetas de bebidas</strong>
                        en este proyecto se utilizó la API de <a href="https://www.thecocktaildb.com/" target="blank">CocktailDB</a>
                    </p>
                </ProyectDescription>

                <ProyectDescription
                    linkWeb="https://pacientes-veterinaria-zustand.netlify.app/"
                    linkGitHub="https://github.com/Jonnathan23/pacientes-zustand"
                    linkImage="img/pacientes_zustand.png"
                    title="Pacientes Zustand"
                >
                    <p><strong>Proyecto de seguimiento de pacientes</strong> en este proyecto se demuestra el uso de Zustand</p>
                </ProyectDescription>

                <ProyectDescription
                    linkWeb="https://control-gastos-react-js.netlify.app/"
                    linkGitHub="https://github.com/Jonnathan23/control-gastos"
                    linkImage="img/control_gastos_miniatura_frontend.png"
                    title="Control Gastos"
                >
                    <p><strong>Proyecto de control de gastos</strong> el proyecto consiste en una aplicación para controlar tus gastos en base a categorías de gastos, actualmente se está expandiendo el proyecto</p>
                </ProyectDescription>

                <ProyectDescription
                    linkGitHub="https://github.com/Jonnathan23/backend-ups-task"
                    linkImage="img/uptask_backend.png"
                    title="Uptask Backend"
                >
                    <p><strong>Proyecto Backend en Node</strong> en este proyecto se demuestra el uso de Node.js y Express y uso de ODNM</p>
                </ProyectDescription>

                <ProyectDescription
                    linkGitHub="https://github.com/Jonnathan23/Rest_api_node_ts_server"
                    linkImage="img/control_gastos_miniatura.png"
                    title="Rest API"
                >
                    <p><strong>Proyecto de REST API con PERN</strong> en este proyecto se demuestra el uso de Node.js y Express con testing</p>
                </ProyectDescription>
            </div>
        </section >
    );
}
