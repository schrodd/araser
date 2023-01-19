import WifiIcon from '@mui/icons-material/Wifi'
import SwiperContainer from '../SwiperContainer'
import EngineeringIcon from '@mui/icons-material/Engineering'
import ConstructionIcon from '@mui/icons-material/Construction'
import { motion } from 'framer-motion'
import anims from '../../content/framermotion'
import getTexts from '../../content/translations'

export default function ServicesDetails({lang}){ 
    const telecomImages = [
            {src: '/img/servicios/TEL 1.webp'},
            {src: '/img/servicios/TEL 2.webp'},
            {src: '/img/servicios/TEL 3.webp'},
            {src: '/img/servicios/TEL 4.webp'},
    ]
    const telecomGrid = [
        {
        src: '/svg/23.svg',
        text: getTexts(lang, 'telecomdet1')
        },
        {
        src: '/svg/24.svg',
        text: getTexts(lang, 'telecomdet2')
        },
        {
        src: '/svg/19.svg',
        text: getTexts(lang, 'telecomdet3')
        },
        {
        src: '/svg/12.svg',
        text: getTexts(lang, 'telecomdet4')
        },
        {
        src: '/svg/20.svg',
        text: getTexts(lang, 'telecomdet5')
        },
        {
        src: '/svg/02.svg',
        text: getTexts(lang, 'telecomdet6')
        },
        {
        src: '/svg/03.svg',
        text: getTexts(lang, 'telecomdet7')
        },
    ]
    const obrasImages = [
        {src: '/img/servicios/RE 1.webp'},
        {src: '/img/servicios/RE 2.webp'},
        {src: '/img/servicios/RE 3.webp'},
        {src: '/img/servicios/RE 4.webp'},
        {src: '/img/servicios/RE 5.webp'},
        {src: '/img/servicios/RE 6.webp'},
        {src: '/img/servicios/RE 7.webp'},
        {src: '/img/servicios/RE 8.webp'},
    ]
    const obrasGrid = [
        {
        src: '/svg/16.svg',
        text: getTexts(lang, 'obrasdet1')
        },
        {
        src: '/svg/15.svg',
        text: getTexts(lang, 'obrasdet2')
        },
        {
        src: '/svg/14.svg',
        text: getTexts(lang, 'obrasdet3')
        },
        {
        src: '/svg/13.svg',
        text: getTexts(lang, 'obrasdet4')
        },
        {
        src: '/svg/11.svg',
        text: getTexts(lang, 'obrasdet5')
        },
        {
        src: '/svg/10.svg',
        text: getTexts(lang, 'obrasdet6')
        },
        {
        src: '/svg/09.svg',
        text: getTexts(lang, 'obrasdet7')
        },
        {
        src: '/svg/08.svg',
        text: getTexts(lang, 'obrasdet8')
        },
        {
        src: '/svg/07.svg',
        text: getTexts(lang, 'obrasdet9')
        },
        {
        src: '/svg/06.svg',
        text: getTexts(lang, 'obrasdet10')
        },
        {
        src: '/svg/05.svg',
        text: getTexts(lang, 'obrasdet11')
        },
        {
        src: '/svg/04.svg',
        text: getTexts(lang, 'obrasdet12')
        },
    ]
    const integralImages = [
        {src: '/img/servicios/MI 1.webp'},
        {src: '/img/servicios/MI 2.webp'},
        {src: '/img/servicios/MI 3.webp'},
        {src: '/img/servicios/MI 4.webp'},
    ]
    const integralGrid = [
        {
        src: '/svg/18.svg',
        text: getTexts(lang, 'integraldet1')
        },
        {
        src: '/svg/01.svg',
        text: getTexts(lang, 'integraldet2')
        },
        {
        src: '/svg/21.svg',
        text: getTexts(lang, 'integraldet3')
        },
        {
        src: '/svg/22.svg',
        text: getTexts(lang, 'integraldet4')
        }
    ]
    return (
        <>
            <a style={{position: 'relative', top: '-110px'}}id='telecom-anchor'></a>
            <section className='services-details'>
                <motion.div
                initial='hidden'
                whileInView='visible'
                variants={anims.container}
                className='service telecom'>
                    <motion.div variants={anims.item} className='text'>
                        <WifiIcon fontSize='large'/>
                        <motion.h3 variants={anims.item}>{getTexts(lang, 'telecom')}</motion.h3>
                        <motion.p variants={anims.item}>{getTexts(lang, 'telecom1')}</motion.p>
                    </motion.div>
                    <SwiperContainer imgs={telecomImages}/>
                    <motion.div variants={anims.item} className='services-grid'>
                        {telecomGrid.map((e,i) => (
                        <motion.div variants={anims.item} key={i} className="item">
                            <motion.img variants={anims.item} src={e.src} alt="item"/>
                            <motion.p variants={anims.item}>{e.text}</motion.p>
                        </motion.div>
                        ))}
                    </motion.div>
                    <motion.img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
                </motion.div>
                <a style={{position: 'relative', top: '-110px'}}id='obras-anchor'></a>
                <a></a>
                <motion.div
                initial='hidden'
                whileInView='visible'
                variants={anims.container}
                className='service obras-reformas'>
                    <motion.div variants={anims.item} className='text'>
                        <EngineeringIcon fontSize='large'/>
                        <motion.h3 variants={anims.item}>{getTexts(lang, 'obras')}</motion.h3>
                        <motion.p variants={anims.item}>{getTexts(lang, 'obras1')}</motion.p>
                    </motion.div>
                    <SwiperContainer imgs={obrasImages}/>
                    <motion.div variants={anims.item} className='services-grid-squares'>
                        {obrasGrid.map((e,i) => (
                        <motion.div variants={anims.item} key={i} className="item">
                            <motion.img variants={anims.item} src={e.src} alt="item"/>
                            <motion.p variants={anims.item}>{e.text}</motion.p>
                        </motion.div>
                        ))}
                    </motion.div>
                    <motion.img className='bg-svg r' src='/svg/whitelogo.svg' alt='logo'/>
                </motion.div>
                <a style={{position: 'relative', top: '-110px'}}id='service-anchor'></a>
                <a></a>
                <motion.div
                initial='hidden'
                whileInView='visible'
                variants={anims.container}
                className='service mantenimiento'>
                    <motion.div variants={anims.item} className='text'>
                        <ConstructionIcon fontSize='large'/>
                        <motion.h3 variants={anims.item}>{getTexts(lang, 'integral')}</motion.h3>
                        <motion.p variants={anims.item}>{getTexts(lang, 'integral1')}</motion.p>
                    </motion.div>
                    <SwiperContainer imgs={integralImages}/>
                    <motion.div variants={anims.item} className='services-grid'>
                        {integralGrid.map((e,i) => (
                        <motion.div variants={anims.item} key={i} className="item">
                            <motion.img variants={anims.item} src={e.src} alt="item"/>
                            <motion.p variants={anims.item}>{e.text}</motion.p>
                        </motion.div>
                        ))}
                    </motion.div>
                    <motion.img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
                </motion.div>
            </section>
        </>
    )
}