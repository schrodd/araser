import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { motion } from 'framer-motion'
import anims from '../../content/framermotion'

export default function Objective(){
    return (
        <section id='objective'>
            <motion.img
            animate={{scale: [1, 1.2, 1]}}
            transition={{duration: 2, repeat: Infinity}}
            src="/svg/target.svg" alt="objetivo"/>
            <motion.p
            variants={anims.item}
            initial='hidden'
            whileInView='visible'
            transition={{duration: 1}}
            >
                Nuestro objetivo es brindar un servicio integral en todo el país, garantizando el bienestar de su equipo de trabajo y preservando la idoneidad de las infraestructuras para mantener su capacidad competitiva y de desarrollo.
            </motion.p>
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={anims.container}
            className='por-que-elegirnos'>
                <motion.img variants={anims.item} className='container-img' src="/img/elegirnos.webp" alt="Por que elegirnos"/>
                <motion.div variants={anims.item} className='text'>
                    <motion.h2 variants={anims.item}>¿Por qué elegirnos?</motion.h2>
                    <motion.ul variants={anims.container}>
                        <motion.li variants={anims.item}><CheckCircleIcon/>Cobertura en todo el país</motion.li>
                        <motion.li variants={anims.item}><CheckCircleIcon/>Respuesta inmediata a sus necesidades en un máximo de 2 hs</motion.li>
                        <motion.li variants={anims.item}><CheckCircleIcon/>Abono flexible para el mantenimiento de sus instalaciones, aumentando así la vida útil de las mismas</motion.li>
                        <motion.li variants={anims.item}><CheckCircleIcon/>Contamos con todas las disciplinas para cubrir los diversos rubros que se requieran</motion.li>
                        <motion.li variants={anims.item}><CheckCircleIcon/>Personal registrado y competente con capacidad técnica que brinde calidad en el trabajo asignado</motion.li>
                    </motion.ul>
                </motion.div>
                <img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
            </motion.div>
        </section>
    )
}