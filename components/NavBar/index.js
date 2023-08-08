import { useScroll } from 'framer-motion'
import { useEffect } from "react"
import Social from "../Social"
import getTexts from '../../content/translations'
import Link from 'next/link'

export default function NavBar({lang}){
    const {scrollYProgress} = useScroll()
    useEffect(() => {
        function navBarBgUpdate(){
            const e = document.querySelector('header')
            if (scrollYProgress.current > 0) {
                e.classList.add('no-top')
            } else {
                e.classList.remove('no-top')
            }
        }
        window.addEventListener('scroll', () => {
            setTimeout(() => navBarBgUpdate(), 10)
        })
    }, [scrollYProgress])
    return (
        <header>
            <Link href="/"><img className="main-logo" src='/logo.svg' alt='Araser SRL logo'/></Link>
            <nav className='pc'>
                <ul>
                    <li><Link href="/">{getTexts(lang, 'navhome')}</Link></li>
                    <li><Link href="/#nosotros-anchor">{getTexts(lang, 'navus')}</Link></li>
                    <li><Link href="/#servicios-anchor">{getTexts(lang, 'navserv')}</Link></li>
                    <li><Link href="/#projects">{getTexts(lang, 'navproy')}</Link></li>
                    <li><Link href="/#contacto-anchor">{getTexts(lang, 'navcont')}</Link></li>
                </ul>
            </nav>
            <Social/>
        </header>
    )
}