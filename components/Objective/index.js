import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { motion } from 'framer-motion'
import anims from '../../content/framermotion'
import getTexts from '../../content/translations'

export default function Objective({lang}){
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
                {getTexts(lang, 'target')}
            </motion.p>
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={anims.container}
            className='por-que-elegirnos'>
                <motion.img variants={anims.item} className='container-img' src="/img/elegirnos.webp" alt="Por que elegirnos"/>
                <motion.div variants={anims.item} className='text'>
                    <motion.h2 variants={anims.item}>{getTexts(lang, 'whyus')}</motion.h2>
                    <motion.ul variants={anims.container}>
                        <motion.li variants={anims.item}><CheckCircleIcon/>{getTexts(lang, 'whyus1')}</motion.li>
                        <motion.li variants={anims.item}><CheckCircleIcon/>{getTexts(lang, 'whyus2')}</motion.li>
                        <motion.li variants={anims.item}><CheckCircleIcon/>{getTexts(lang, 'whyus3')}</motion.li>
                        <motion.li variants={anims.item}><CheckCircleIcon/>{getTexts(lang, 'whyus4')}</motion.li>
                        <motion.li variants={anims.item}><CheckCircleIcon/>{getTexts(lang, 'whyus5')}</motion.li>
                    </motion.ul>
                </motion.div>
                <img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
            </motion.div>
        </section>
    )
}