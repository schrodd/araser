import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {motion} from 'framer-motion'

export default function HomeSection(){
    return (
        <section id="home">
        <motion.div 
        initial={{ opacity: 0, marginBottom: -100 }}
        whileInView={{ opacity: 1, marginBottom: 0 }}  
        transition={{duration: .8}}
        className="container">
            <h1>Empresa de Telecomunicaciones y Obras Edilicias</h1>
            <p>Proveemos servicios a empresas, locales comerciales y entidades bancarias. Contamos con una amplia trayectoria en el rubro de las telecomunicaciones, obras y reformas edilicias y mantenimiento integral en todo el país</p>
            <a href="#">
                <button className='btn'>
                    Ver más
                    <ArrowForwardIcon/>
                </button>
            </a>
        </motion.div>
        </section>
    )
}