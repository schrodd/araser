import { useScroll } from 'framer-motion'
import { useEffect } from "react"
import Social from "../Social"
import getTexts from '../../content/translations'

export default function NavBar({lang}){
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
            <nav className='pc'>
                <ul>
                    <li><a href="#">{getTexts(lang, 'navhome')}</a></li>
                    <li><a href="#nosotros-anchor">{getTexts(lang, 'navus')}</a></li>
                    <li><a href="#servicios-anchor">{getTexts(lang, 'navserv')}</a></li>
                    <li><a href="#projects">{getTexts(lang, 'navproy')}</a></li>
                    <li><a href="#contacto-anchor">{getTexts(lang, 'navcont')}</a></li>
                </ul>
            </nav>
            <Social/>
        </header>
    )
}