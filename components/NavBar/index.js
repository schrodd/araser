import Svg from "../Svg"
import { useScroll } from 'framer-motion'
import { useEffect } from "react"

export default function NavBar(){
    const {scrollYProgress} = useScroll()
    function navBarBgUpdate(){
        const e = document.querySelector('header')
        if (scrollYProgress.current > 0) {
            e.classList.add('no-top')
        } else {
            e.classList.remove('no-top')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setTimeout(() => navBarBgUpdate(), 10)
        })
    }, [])
    return (
        <header>
            <a href="#"><img className="main-logo" src='/logo.svg' alt='Araser SRL logo'/></a>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#nosotros-anchor">Nosotros</a></li>
                    <li><a href="#servicios-anchor">Servicios</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
            <div className="social">
                <a href="https://www.linkedin.com/company/araser-srl/" target="_blank" rel="noopener noreferrer"><Svg route="/svg/lin.svg"/></a>
                <a href="https://www.facebook.com/arasersrl/" target="_blank" rel="noopener noreferrer"><Svg route="/svg/fb.svg"/></a>
                <a href="https://www.instagram.com/arasersrl.co/" target="_blank" rel="noopener noreferrer"><Svg route="/svg/ig.svg"/></a>
                <a href="https://twitter.com/AraserSrl" target="_blank" rel="noopener noreferrer"><Svg route="/svg/tw.svg"/></a>
            </div>
        </header>
    )
}