import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function HomeSection(){
    return (
        <section id="home">
        <div className="container">
            <h1>Empresa de Telecomunicaciones y Obras Edilicias</h1>
            <p>Proveemos servicios a empresas, locales comerciales y entidades bancarias. Contamos con una amplia trayectoria en el rubro de las telecomunicaciones, obras y reformas edilicias y mantenimiento integral en todo el país</p>
            <a href="#">
                <button className='btn'>
                    Ver más
                    <ArrowForwardIcon/>
                </button>
            </a>
        </div>
        </section>
    )
}