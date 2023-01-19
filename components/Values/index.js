import MapIcon from '@mui/icons-material/Map';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { motion } from 'framer-motion'
import getTexts from '../../content/translations';
import anims from '../../content/framermotion'

export default function Values({lang}){
    const n = 100
    const valuesVariants = {
        hiddenLeft: {
            opacity: 0,
            x: n*-1
        },
        hiddenRight: {
            opacity: 0,
            x: n
        },
        hiddenDown: {
            opacity: 0,
            y: n
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        },
        hover: {
            y: -10,
            scale: 1.03,
        }
    }
    return (
        <section id='mision-vision-valores'>
            <div className='wrapper'>
                <motion.div
                variants={anims.container}
                initial='hidden'
                whileInView='visible'
                whileHover='hover'
                transition={{duration: .7}}
                className='mision'>
                    <MapIcon/>
                    <motion.h2 variants={anims.item}>{getTexts(lang, 'mission')}</motion.h2>
                    <motion.p variants={anims.item}>{getTexts(lang, 'mission1')}</motion.p>
                </motion.div>
                <motion.div
                variants={anims.container}
                initial='hidden'
                whileInView='visible'
                whileHover='hover'
                transition={{duration: .7}}
                className='vision'>
                    <VisibilityIcon/>
                    <motion.h2 variants={anims.item}>{getTexts(lang, 'vision')}</motion.h2>
                    <motion.p variants={anims.item}>{getTexts(lang, 'vision1')}</motion.p>
                    {/* <motion.p variants={anims.item}>{getTexts(lang, 'vision2')}</motion.p>
                    <motion.p variants={anims.item}>{getTexts(lang, 'vision3')}</motion.p> */}
                </motion.div>
                <motion.div
                variants={anims.container}
                initial='hidden'
                whileInView='visible'
                whileHover='hover'
                transition={{duration: .7}}
                className='valores'>
                    <FavoriteIcon/>
                    <motion.h2 variants={anims.item}>{getTexts(lang, 'values')}</motion.h2>
                    <motion.p variants={anims.item}>{getTexts(lang, 'values1')}</motion.p>
                    <motion.p variants={anims.item}><b>{getTexts(lang, 'values2')}</b></motion.p>
                    <motion.p variants={anims.item}>{getTexts(lang, 'values3')}</motion.p>
                </motion.div>
                <motion.div
                variants={anims.container}
                initial='hidden'
                whileInView='visible'
                whileHover='hover'
                transition={anims.transition}
                className='valores-desc'>
                    <motion.div variants={anims.item} className='item'>
                        <FavoriteIcon/>
                        <h3>{getTexts(lang, 'prox')}</h3>
                        <p>{getTexts(lang, 'prox1')}</p>
                    </motion.div>
                    <motion.div variants={anims.item} className='item'>
                        <FavoriteIcon/>
                        <h3>{getTexts(lang, 'exc')}</h3>
                        <p>{getTexts(lang, 'exc1')}</p>
                    </motion.div>
                    <motion.div variants={anims.item} className='item'>
                        <FavoriteIcon/>
                        <h3>{getTexts(lang, 'solv')}</h3>
                        <p>{getTexts(lang, 'solv1')}</p>
                    </motion.div>
                    <motion.div variants={anims.item} className='item'>
                        <FavoriteIcon/>
                        <h3>{getTexts(lang, 'aut')}</h3>
                        <p>{getTexts(lang, 'aut1')}</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}