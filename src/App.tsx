import './App.css'
import MyProyects from './components/MyProjects'
import MySkills from './components/MySkills'

function App() {

    const handleShowDetails = () => {
        alert('Hola mundo')
    }

    return (
        <div className='all-content'>
            <MyProyects />

            <section onClick={handleShowDetails}>
                <h1>Hola, Soy Jonnathan Saquicela</h1>
                <p>Estudiante de Ingenieria de Computación de la Universidad Politecnica Salesiana</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati eius magnam expedita in quis id laboriosam facere blanditiis, atque asperiores et aliquid culpa delectus. Similique aperiam suscipit rerum ex.</p>
            </section>


            <section>
                <h1>Mi experiencia</h1>
                <h2>Proyecto: Aplicación Web Full-Stack para el Registro de la Propiedad</h2>
                <h3>Prácticas Preprofesionales (Marzo 2025 - Julio 2025)</h3>

                <p>
                    Durante mis prácticas preprofesionales, desarrollé una solución web integral desde cero para el Registro de la Propiedad.
                    El objetivo principal del proyecto era <strong>facilitar el proceso de los detalles de pago de la empresa a sus empleados, junto con la generación de documentos necesarios para el banco</strong>, mejorando la eficiencia y la productividad de dicho proceso.
                </p>

                <h3>Mis Responsabilidades Clave:</h3>
                <ul>
                    <li>
                        <strong>Desarrollo del Backend:</strong> 
                        Creación de una API RESTful robusta y segura utilizando Node.js y Express para manejar toda la lógica de negocio y la comunicación con el servidor.
                    </li>
                    <li>
                        <strong>Desarrollo del Frontend:</strong>
                         Implementación de una interfaz de usuario moderna, dinámica y responsiva con React, creando componentes reutilizables para una experiencia de usuario fluida.
                    </li>
                    <li>
                        <strong>Gestión de Base de Datos:</strong>
                        Diseño y modelado de la base de datos relacional en PostgreSQL. Utilicé <strong>Sequelize</strong> para gestionar las consultas y la persistencia de datos de manera eficiente.
                    </li>
                    <li>
                        <strong>Control de Versiones:</strong> 
                        Administración de todo el código fuente del proyecto y colaboración mediante flujos de trabajo en Git.
                    </li>
                </ul>

                <h3>Tecnologías Utilizadas:</h3>
                <p>
                    <strong>Frontend:</strong> React.js (TypeScript), HTML5, CSS3<br />
                    <strong>Backend:</strong> Node.js (TypeScript), Express.js<br />
                    <strong>Base de Datos:</strong> PostgreSQL, Sequelize <br />
                    <strong>Herramientas:</strong> Git, GitHub, Postman
                </p>
            </section>

            <MySkills />

            <section>
                {
                    //TODO: Contacto
                }
            </section>

            <footer>
                <p>Todos los derechos reservados &copy;</p>
            </footer>

        </div>
    )
}

export default App
