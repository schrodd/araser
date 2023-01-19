import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {motion} from 'framer-motion'
import anims from '../../content/framermotion.js'
import getTexts from '../../content/translations.js'

export default function HomeSection({lang}){
    return (
        <section id="home">
        <motion.div
        initial='hidden'
        whileInView='visible'
        variants={anims.container}
        // animate='visible'
        className="container">
            <motion.h1 variants={anims.item}>{getTexts(lang, 'homeh1')}</motion.h1>
            <motion.p variants={anims.item}>{getTexts(lang, 'homeh2')}</motion.p>
            <motion.a variants={anims.item} href="#nosotros-anchor" className='btn'>
                {getTexts(lang, 'seemore')}
                <ArrowForwardIcon/>
            </motion.a>
        </motion.div>
        </section>
    )
}