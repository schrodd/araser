import Svg from "../Svg"

export default function NavBar(){
    return (
        <header>
            <a href="#"><img className="main-logo" src='/logo.svg' alt='Araser SRL logo'/></a>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#about-us">Nosotros</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <div className="social">
                <a href="#" target="_blank" rel="noopener noreferrer"><Svg route="/svg/fb.svg"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><Svg route="/svg/ig.svg"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><Svg route="/svg/wsp.svg"/></a>
            </div>
        </header>
    )
}