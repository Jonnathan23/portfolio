import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import MyExperience from './components/experience/MyExperience'
import MyProyects from './components/projects/MyProjects'

function App() {

    return (
        <div className='all-content'>
            <header className='header'>
                <div className='header__logo__container'>
                    <img className='header__logo' width="100px" src="./logo.png" alt="Logo" />
                </div>
                
                <nav className='header__nav'>
                    <a className='header__nav__link' href="#">Contacto</a>
                </nav>
            </header>
            <main className='main'>
                <MyProyects />
                <AboutMe />
                <MyExperience />
            </main>
            <footer>
                <Contact />
                <p>Todos los derechos reservados &copy;</p>
            </footer>
        </div>
    )
}

export default App
