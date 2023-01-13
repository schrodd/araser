import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SwiperContainer from '../SwiperContainer'
import {motion} from 'framer-motion'
import anims from '../../content/framermotion'

export default function Introduction(){
    const introImg = [
        {
            src: '/img/1refed.webp',
            title: 'Reformas Edilicias'
        },
        {
            src: '/img/2mantint.webp',
            title: 'Mantenimiento Integral'
        },
        {
            src: '/img/3telecom.webp',
            title: 'Telecomunicaciones'
        }
    ]
    return (
        <motion.section id="introduction">
            <SwiperContainer imgs={introImg}/>
            <motion.div 
            initial='hidden'
            whileInView='visible'
            variants={anims.container}
            className="text">
                <motion.p variants={anims.item}>Ofrecemos una amplia gama de servicios que incluyen Telecomunicaciones, Obras y reformas edilicias, y mantenimiento integral correctivo y preventivo.</motion.p>
                <motion.a variants={anims.item} href="#">
                    <motion.button variants={anims.item} className="btn white">
                    Ver más
                    <ArrowForwardIcon/>
                    </motion.button>
                </motion.a>
            </motion.div>
        </motion.section>
    )
}