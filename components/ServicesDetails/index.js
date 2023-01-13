import WifiIcon from '@mui/icons-material/Wifi'
import SwiperContainer from '../SwiperContainer'
import EngineeringIcon from '@mui/icons-material/Engineering'
import ConstructionIcon from '@mui/icons-material/Engineering'
import { motion } from 'framer-motion'
import anims from '../../content/framermotion'

export default function ServicesDetails(){
    const telecomImages = [
            {src: '/img/servicios/TEL 1.webp'},
            {src: '/img/servicios/TEL 2.webp'},
            {src: '/img/servicios/TEL 3.webp'},
            {src: '/img/servicios/TEL 4.webp'},
    ]
    const telecomGrid = [
        {
        src: '/svg/23.svg',
        text: 'Diseño, ingeniería y despliegue de redes FTTH/GPON. Planta interna'
        },
        {
        src: '/svg/24.svg',
        text: 'Construcción de redes de FO interurbana, canalizaciones, tuneleo dirigido'
        },
        {
        src: '/svg/19.svg',
        text: 'Instalaciones domiciliarias de teléfono, cable TV e internet'
        },
        {
        src: '/svg/12.svg',
        text: 'Mantenimiento de plantel de cable estructurado. Centrales'
        },
        {
        src: '/svg/20.svg',
        text: 'Cambio e instalación de postes'
        },
        {
        src: '/svg/02.svg',
        text: 'Instalación de cámaras de seguridad'
        },
        {
        src: '/svg/03.svg',
        text: 'Redes informáticas'
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
        text: 'Albañinería'
        },
        {
        src: '/svg/15.svg',
        text: 'Instalación de Redes'
        },
        {
        src: '/svg/14.svg',
        text: 'Vidrios'
        },
        {
        src: '/svg/13.svg',
        text: 'Electricidad'
        },
        {
        src: '/svg/11.svg',
        text: 'Plomería'
        },
        {
        src: '/svg/10.svg',
        text: 'Cortinas Metálicas'
        },
        {
        src: '/svg/09.svg',
        text: 'Pintura'
        },
        {
        src: '/svg/08.svg',
        text: 'Gas'
        },
        {
        src: '/svg/07.svg',
        text: 'Alarmas'
        },
        {
        src: '/svg/06.svg',
        text: 'Cerrajería'
        },
        {
        src: '/svg/05.svg',
        text: 'Carpintería'
        },
        {
        src: '/svg/04.svg',
        text: 'Aire Acondicionado'
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
        text: 'Mantenimiento preventivo y correctivo de edificios e infraestructura'
        },
        {
        src: '/svg/01.svg',
        text: 'Mantenimiento de espacios verdes por medio de cortes, podas, resiembras, etc'
        },
        {
        src: '/svg/21.svg',
        text: 'Fumigación integral, control integral de plagas y desinfección'
        },
        {
        src: '/svg/22.svg',
        text: 'Estudio físico, químico y bacteriológico del agua'
        }
    ]
    return (
        <section className='services-details'>
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={anims.stackFromLeft}
            className='service telecom'>
                <motion.div variants={anims.itemRight} className='text'>
                    <WifiIcon fontSize='large'/>
                    <motion.h3 variants={anims.itemRight}>Telecomunicaciones</motion.h3>
                    <motion.p variants={anims.itemRight}>Realizamos Diseño e ingeniería para redes internas o externas, UTP, fibra óptica, enlace inalámbrico. Soluciones integrales de plantel exterior, Fiber to the Home (FTTH).</motion.p>
                </motion.div>
                <SwiperContainer imgs={telecomImages}/>
                <motion.div variants={anims.itemRight} className='services-grid'>
                    {telecomGrid.map((e,i) => (
                    <motion.div variants={anims.itemRight} key={i} className="item">
                        <motion.img variants={anims.itemRight} src={e.src} alt="item"/>
                        <motion.p variants={anims.itemRight}>{e.text}</motion.p>
                    </motion.div>
                    ))}
                </motion.div>
                <motion.img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
            </motion.div>
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={anims.stackFromRight}
            className='service obras-reformas'>
                <motion.div variants={anims.itemLeft} className='text'>
                    <EngineeringIcon fontSize='large'/>
                    <motion.h3 variants={anims.itemLeft}>Ejecución de obras y reformas edilicias</motion.h3>
                    <motion.p variants={anims.itemLeft}>Realizamos Diseño e ingeniería para redes internas o externas, UTP, fibra óptica, enlace inalámbrico. Soluciones integrales de plantel exterior, Fiber to the Home (FTTH).</motion.p>
                </motion.div>
                <SwiperContainer imgs={obrasImages}/>
                <motion.div variants={anims.itemLeft} className='services-grid-squares'>
                    {obrasGrid.map((e,i) => (
                    <motion.div variants={anims.itemLeft} key={i} className="item">
                        <motion.img variants={anims.itemLeft} src={e.src} alt="item"/>
                        <motion.p variants={anims.itemLeft}>{e.text}</motion.p>
                    </motion.div>
                    ))}
                </motion.div>
                <motion.img className='bg-svg r' src='/svg/whitelogo.svg' alt='logo'/>
            </motion.div>
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={anims.stackFromLeft}
            className='service mantenimiento'>
                <motion.div variants={anims.itemRight} className='text'>
                    <ConstructionIcon fontSize='large'/>
                    <motion.h3 variants={anims.itemRight}>Mantenimiento Integral</motion.h3>
                    <motion.p variants={anims.itemRight}>Brindamos servicios de Mantenimiento integral garantizando el bienestar de su equipo y la calidad de sus instalaciones.</motion.p>
                </motion.div>
                <SwiperContainer imgs={integralImages}/>
                <motion.div variants={anims.itemRight} className='services-grid'>
                    {integralGrid.map((e,i) => (
                    <motion.div variants={anims.itemRight} key={i} className="item">
                        <motion.img variants={anims.itemRight} src={e.src} alt="item"/>
                        <motion.p variants={anims.itemRight}>{e.text}</motion.p>
                    </motion.div>
                    ))}
                </motion.div>
                <motion.img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
            </motion.div>
        </section>
    )
}