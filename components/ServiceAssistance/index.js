import { motion } from 'framer-motion'
import anims from '../../content/framermotion'

export default function ServiceAssistance(){
    return (
        <motion.section
        initial='hidden'
        whileInView='visible'
        variants={anims.container}
        id='service-assistance'>
            <motion.img variants={anims.item} className='service-assistance-img' src="/img/serv-asist.webp" alt="Servicio y asistencia"/>
            <motion.div variants={anims.item} className='text'>
            <motion.img variants={anims.item} className='icon' src='/svg/bank.svg' alt='bank icon'/>
            <motion.h2 variants={anims.item}>Brindamos servicio y asistencia integral a empresas</motion.h2>
            <motion.p variants={anims.item}>Somos referentes en servicios de mantenimiento integral y edilicio, garantizando el bienestar de su equipo y la calidad de sus instalaciones.</motion.p>
            </motion.div>
            <motion.img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
        </motion.section>
    )
}