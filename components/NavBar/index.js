import { useScroll } from 'framer-motion'
import { useEffect } from "react"
import Social from "../Social"

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
            <Social/>
        </header>
    )
}