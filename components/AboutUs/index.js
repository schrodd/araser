import ApartmentIcon from '@mui/icons-material/Apartment'
import HelpIcon from '@mui/icons-material/Help'
import { motion } from 'framer-motion'
import anims from '../../content/framermotion'
import getTexts from '../../content/translations'

export default function AboutUs({lang}){
    return (
        <section id='about-us'>
            <a style={{position: 'relative', top: '-100px'}} id='nosotros-anchor'></a>
            <div className='icon-title'>
                <ApartmentIcon fontSize='large'/>
                <h2>{lang == 'es' ? 'Sobre nosotros' : 'About us'}</h2>
            </div>
            <div className='container'>
                <motion.div
                initial='hidden'
                whileInView='visible'
                variants={anims.container}
                className='text'>
                    <motion.h3 variants={anims.item}>{getTexts(lang, 'who')}</motion.h3>
                    <motion.p variants={anims.item}>{getTexts(lang, 'who1')}</motion.p>
                    <motion.p variants={anims.item}>{getTexts(lang, 'who2')}</motion.p>
                    <motion.p variants={anims.item}>{getTexts(lang, 'who3')}</motion.p>
                </motion.div>
                <img className='container-img' src='/img/quienes.webp' alt='Quienes somos'/>
                <img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
            </div>
        </section>
    )
}