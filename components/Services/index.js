import ConstructionIcon from '@mui/icons-material/Construction'
import WifiIcon from '@mui/icons-material/Wifi'
import EngineeringIcon from '@mui/icons-material/Engineering'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ListAltIcon from '@mui/icons-material/ListAlt'
import GroupIcon from '@mui/icons-material/Group'
import GppGoodIcon from '@mui/icons-material/GppGood'
import { motion } from 'framer-motion'
import anims from '../../content/framermotion'

export default function Services(){ 
    return (
        <section id='services'>
            <a style={{position: 'relative', top: '-100px'}} id='servicios-anchor'></a>
            <div className="title">
            <ConstructionIcon/>
            <h2>Servicios</h2>
            </div>
            <div className="services-banner">
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={anims.container}
            className="service telecom">
                <WifiIcon/>
                <motion.h3 variants={anims.item}>Telecomunicaciones</motion.h3>
                <motion.p variants={anims.item}>Realizamos diseño e ingeniería para redes internas o externas, UTP, fibra óptica, enlace inalámbrico. Soluciones integrales de plantel exterior, Fiber to the Home (FTTH).</motion.p>
                <motion.button variants={anims.item} className='btn'>
                    Ver más
                    <ArrowForwardIcon/>
                </motion.button>
            </motion.div>
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={anims.container}
            className="service obras">
                <EngineeringIcon/>
                <motion.h3 variants={anims.item}>Ejecución de obras y reformas edilicias</motion.h3>
                <motion.p variants={anims.item}>Brindamos asistencia Integral en structuras edilicias, a empresas o locales comerciales, ofreciéndoles un abono flexible para el mantenimiento de sus instalaciones.</motion.p>
                <motion.button variants={anims.item} className='btn'>
                Ver más
                <ArrowForwardIcon/>
                </motion.button>
            </motion.div>
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={anims.container}
            className="service mantenimiento">
                <ConstructionIcon/>
                <motion.h3 variants={anims.item}>Mantenimiento integral</motion.h3>
                <motion.p variants={anims.item}>Brindamos servicios de Mantenimiento técnico integral, preventivo y correctivo de instalaciones, como oficinas, locales comerciales, entidades bancarias y empresas en general, garantizando la eficiencia y vida útil del equipamiento.</motion.p>
                <motion.button variants={anims.item} className='btn'>
                Ver más
                <ArrowForwardIcon/>
                </motion.button>
            </motion.div>
            <div className='background'></div>
            </div>
            <motion.div 
            initial='hidden'
            whileInView='visible'
            variants={anims.container}
            className='perks'>
                <motion.div variants={anims.item}>
                    <ListAltIcon/>
                    <p>Ofrecemos una amplia gama de servicios que incluyen Telecomunicaciones, Obras y Reformas Edilicias, y Mantenimiento Integral correctivo y preventivo.</p>
                </motion.div>
                <motion.div variants={anims.item}>
                    <GroupIcon/>
                    <p>Nuestro equipo técnico aporta en cada proyecto su conocimiento y experiencia, ofreciendo al cliente un trabajo diferencial y eficiente.</p>
                </motion.div>
                <motion.div variants={anims.item}>
                    <GppGoodIcon/>
                    <p>Araser busca cumplir con sus trabajos garantizando una gestión segura, confiable y que cumpla con los niveles más altos de calidad.</p>
                </motion.div>
            </motion.div>
        </section>
    )
}