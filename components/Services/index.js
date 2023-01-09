import ConstructionIcon from '@mui/icons-material/Construction'
import WifiIcon from '@mui/icons-material/Wifi'
import EngineeringIcon from '@mui/icons-material/Engineering'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ListAltIcon from '@mui/icons-material/ListAlt'
import GroupIcon from '@mui/icons-material/Group'
import GppGoodIcon from '@mui/icons-material/GppGood'

export default function Services(){
    return (
        <section id='services'>
            <div className="title">
            <ConstructionIcon/>
            <h2>Servicios</h2>
            </div>
            <div className="services-banner">
            <div className="service telecom">
                <WifiIcon/>
                <h3>Telecomunicaciones</h3>
                <p>Realizamos diseño e ingeniería para redes internas o externas, UTP, fibra óptica, enlace inalámbrico. Soluciones integrales de plantel exterior, Fiber to the Home (FTTH).</p>
                <button className='btn'>
                Ver más
                <ArrowForwardIcon/>
                </button>
            </div>
            <div className="service obras">
                <EngineeringIcon/>
                <h3>Ejecución de obras y reformas edilicias</h3>
                <p>Brindamos asistencia Integral en structuras edilicias, a empresas o locales comerciales, ofreciéndoles un abono flexible para el mantenimiento de sus instalaciones.</p>
                <button className='btn'>
                Ver más
                <ArrowForwardIcon/>
                </button>
            </div>
            <div className="service mantenimiento">
                <ConstructionIcon/>
                <h3>Mantenimiento integral</h3>
                <p>Brindamos servicios de Mantenimiento técnico integral, preventivo y correctivo de instalaciones, como oficinas, locales comerciales, entidades bancarias y empresas en general, garantizando la eficiencia y vida útil del equipamiento.</p>
                <button className='btn'>
                Ver más
                <ArrowForwardIcon/>
                </button>
            </div>
            <div className='background'></div>
            </div>
            <div className='perks'>
            <div>
                <ListAltIcon/>
                <p>Ofrecemos una amplia gama de servicios que incluyen Telecomunicaciones, Obras y Reformas Edilicias, y Mantenimiento Integral correctivo y preventivo.</p>
            </div>
            <div>
                <GroupIcon/>
                <p>Nuestro equipo técnico aporta en cada proyecto su conocimiento y experiencia, ofreciendo al cliente un trabajo diferencial y eficiente.</p>
            </div>
            <div>
                <GppGoodIcon/>
                <p>Araser busca cumplir con sus trabajos garantizando una gestión segura, confiable y que cumpla con los niveles más altos de calidad.</p>
            </div>
            </div>
        </section>
    )
}