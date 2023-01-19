import ConstructionIcon from '@mui/icons-material/Construction'
import WifiIcon from '@mui/icons-material/Wifi'
import EngineeringIcon from '@mui/icons-material/Engineering'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ListAltIcon from '@mui/icons-material/ListAlt'
import GroupIcon from '@mui/icons-material/Group'
import GppGoodIcon from '@mui/icons-material/GppGood'
import { motion } from 'framer-motion'
import anims from '../../content/framermotion'
import getTexts from '../../content/translations'

export default function Services({lang}){ 
    return (
        <section id='services'>
            <a style={{position: 'relative', top: '-100px'}} id='servicios-anchor'></a>
            <div className="title">
            <ConstructionIcon/>
            <h2>{getTexts(lang, 'serv')}</h2>
            </div>
            <div className="services-banner">
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={anims.container}
            className="service telecom">
                <WifiIcon/>
                <motion.h3 variants={anims.item}>{getTexts(lang, 'telecom')}</motion.h3>
                <motion.p variants={anims.item}>{getTexts(lang, 'telecom1')}</motion.p>
                <motion.a variants={anims.item} href='#telecom-anchor' className='btn'>
                    {getTexts(lang, 'seemore')}   
                    <ArrowForwardIcon/>
                </motion.a>
            </motion.div>
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={anims.container}
            className="service obras">
                <EngineeringIcon/>
                <motion.h3 variants={anims.item}>{getTexts(lang, 'obras')}</motion.h3>
                <motion.p variants={anims.item}>{getTexts(lang, 'obras1')}</motion.p>
                <motion.a variants={anims.item} href='#obras-anchor' className='btn'>
                {getTexts(lang, 'seemore')}
                <ArrowForwardIcon/>
                </motion.a>
            </motion.div>
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={anims.container}
            className="service mantenimiento">
                <ConstructionIcon/>
                <motion.h3 variants={anims.item}>{getTexts(lang, 'integral')}</motion.h3>
                <motion.p variants={anims.item}>{getTexts(lang, 'integral1')}</motion.p>
                <motion.a variants={anims.item} href='#service-anchor' className='btn'>
                {getTexts(lang, 'seemore')}
                <ArrowForwardIcon/>
                </motion.a>
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
                    <p>{getTexts(lang, 'perks1')}</p>
                </motion.div>
                <motion.div variants={anims.item}>
                    <GroupIcon/>
                    <p>{getTexts(lang, 'perks2')}</p>
                </motion.div>
                <motion.div variants={anims.item}>
                    <GppGoodIcon/>
                    <p>{getTexts(lang, 'perks3')}</p>
                </motion.div>
            </motion.div>
        </section>
    )
}