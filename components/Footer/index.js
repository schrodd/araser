import Social from '../Social'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

export default function Footer(){
    return (
        <footer>
            <div className="wrapper">
                <div className="col one">
                    <img className='logo' src='/svg/whitelogo.svg' alt='logo'/>
                    <div className="item">
                        <h3>Mapa del sitio</h3>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#about-us">Nosotros</a></li>
                            <li><a href="#services">Servicios</a></li>
                            <li><a href="#projects">Proyectos</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="item">
                        <h3>Idioma</h3>
                        <div className="flags">
                            <button className="flag es">
                                <img src='/svg/whitelogo.svg' alt='flag-es'/>
                            </button>
                            <button className="flag en">
                                <img src='/svg/whitelogo.svg' alt='flag-es'/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col two">
                    <div className="item">
                        <h3>Dirección</h3>
                        <h4>Córdoba</h4>
                        <p>27 de abril 2410. Córdoba Capital.</p>
                        <h4>Tucumán</h4>
                        <p>Barrio APEM Mzna Ñ Casa 15, T4101 Las Talitas, Tucumán.</p>
                    </div>
                    <div className="item">
                        <h3>Horario de atención</h3>
                        <p>De lunes a viernes, de 08:00 a 18:00 horas.</p>
                    </div>
                    <div className="item">
                        <h3>Contáctenos</h3>
                        <Social/>
                    </div>
                    <button className='btn' onClick={() => {
                        window.scrollTo(0,0)
                    }}>
                        Volver arriba
                        <ArrowUpwardIcon/>
                    </button>
                </div>
                <div className="col map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6810.491600877813!2d-64.21908990288502!3d-31.407353206291106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298976f09ca53%3A0xa1fb61d25c1b9640!2s27%20de%20Abril%202410%2C%20X5002%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1673797688822!5m2!1ses-419!2sar" style={{border: 0}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='google-map'></iframe>
                </div>
            </div>
            <img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
        </footer>
    )
}