import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SwiperContainer from '../SwiperContainer'
import {motion} from 'framer-motion'
import anims from '../../content/framermotion'
import getTexts from '../../content/translations'

export default function Introduction({lang}){
    const introImg = [
        {
            src: '/img/1refed.webp',
            title: getTexts(lang, 'introbanner1')
        },
        {
            src: '/img/2mantint.webp',
            title: getTexts(lang, 'introbanner2')
        },
        {
            src: '/img/3telecom.webp',
            title: getTexts(lang, 'introbanner3')
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
                <motion.p variants={anims.item}>{getTexts(lang, 'introduction')}</motion.p>
                <motion.a variants={anims.item} href="#servicios-anchor">
                    <motion.button variants={anims.item} className="btn white">
                    {getTexts(lang, 'seemore')}
                    <ArrowForwardIcon/>
                    </motion.button>
                </motion.a>
            </motion.div>
        </motion.section>
    )
}