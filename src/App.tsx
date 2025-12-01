import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import MyExperience from './components/experience/MyExperience'
import MyProyects from './components/projects/MyProjects'

function App() {

    return (
        <div className='all-content'>
            <header>
                <div>
                    <img width="100px" src="./logo.png" alt="Logo" />
                </div>
                <div>
                    <nav>
                        <a href="#">Contacto</a>
                    </nav>
                </div>
            </header>
            <main>
                <MyExperience />
                <MyProyects />
                <AboutMe />
            </main>
            <footer>
                <Contact />
                <p>Todos los derechos reservados &copy;</p>
            </footer>

        </div>
    )
}

export default App
