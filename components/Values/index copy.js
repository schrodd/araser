import MapIcon from '@mui/icons-material/Map';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { motion } from 'framer-motion'
import getTexts from '../../content/translations';

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
                variants={valuesVariants}
                initial='hiddenLeft'
                whileInView='visible'
                whileHover='hover'
                transition={{duration: .7}}
                className='mision'>
                    <MapIcon/>
                    <h2>{getTexts(lang, 'mission')}</h2>
                    <p>{getTexts(lang, 'mission1')}</p>
                </motion.div>
                <motion.div
                variants={valuesVariants}
                initial='hiddenRight'
                whileInView='visible'
                whileHover='hover'
                transition={{duration: .7}}
                className='vision'>
                    <VisibilityIcon/>
                    <h2>{getTexts(lang, 'vision')}</h2>
                    <p>{getTexts(lang, 'vision1')}</p>
                    <p>{getTexts(lang, 'vision2')}</p>
                    <p>{getTexts(lang, 'vision3')}</p>
                </motion.div>
                <motion.div
                variants={valuesVariants}
                initial='hiddenDown'
                whileInView='visible'
                whileHover='hover'
                transition={{duration: .7}}
                className='valores'>
                    <div className='left'>
                    <FavoriteIcon/>
                    <h2>{getTexts(lang, 'values')}</h2>
                    <p>{getTexts(lang, 'values1')}</p>
                    <p>{getTexts(lang, 'values2')}</p>
                    <p>{getTexts(lang, 'values3')}</p>
                    </div>
                    <div className='right'>
                    <div className='item'>
                        <h3>{getTexts(lang, 'prox')}</h3>
                        <p>{getTexts(lang, 'prox1')}</p>
                    </div>
                    <div className='item'>
                        <h3>{getTexts(lang, 'exc')}</h3>
                        <p>{getTexts(lang, 'exc1')}</p>
                    </div>
                    <div className='item'>
                        <h3>{getTexts(lang, 'solv')}</h3>
                        <p>{getTexts(lang, 'solv1')}</p>
                    </div>
                    <div className='item'>
                        <h3>{getTexts(lang, 'aut')}</h3>
                        <p>{getTexts(lang, 'aut1')}</p>
                    </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}