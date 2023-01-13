import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {motion} from 'framer-motion'
import anims from '../../content/framermotion.js'

export default function HomeSection(){
    return (
        <section id="home">
        <motion.div
        initial='hidden'
        whileInView='visible'
        variants={anims.container}
        // animate='visible'
        className="container">
            <motion.h1 variants={anims.item}>Empresa de Telecomunicaciones y Obras Edilicias</motion.h1>
            <motion.p variants={anims.item}>Proveemos servicios a empresas, locales comerciales y entidades bancarias. Contamos con una amplia trayectoria en el rubro de las telecomunicaciones, obras y reformas edilicias y mantenimiento integral en todo el país</motion.p>
            <motion.a variants={anims.item} href="#">
                <motion.button variants={anims.item} className='btn'>
                    Ver más
                    <ArrowForwardIcon/>
                </motion.button>
            </motion.a>
        </motion.div>
        </section>
    )
}