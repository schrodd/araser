import { motion } from 'framer-motion'
import anims from '../../content/framermotion'
import getTexts from '../../content/translations'

export default function ServiceAssistance({lang}){
    return (
        <motion.section
        initial='hidden'
        whileInView='visible'
        variants={anims.container}
        id='service-assistance'>
            <motion.img variants={anims.item} className='service-assistance-img' src="/img/serv-asist.webp" alt="Servicio y asistencia"/>
            <motion.div variants={anims.item} className='text'>
            <motion.img variants={anims.item} className='icon' src='/svg/bank.svg' alt='bank icon'/>
            <motion.h2 variants={anims.item}>{getTexts(lang, 'brindamos')}</motion.h2>
            <motion.p variants={anims.item}>{getTexts(lang, 'brindamosdet')}</motion.p>
            </motion.div>
            <motion.img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
        </motion.section>
    )
}