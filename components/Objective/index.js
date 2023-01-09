import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export default function Objective(){
    return (
        <section id='objective'>
            <img src="/svg/target.svg" alt="objetivo"/>
            <p>Nuestro objetivo es brindar un servicio integral en todo el país, garantizando el bienestar de su equipo de trabajo y preservando la idoneidad de las infraestructuras para mantener su capacidad competitiva y de desarrollo.</p>
            <div className='por-que-elegirnos'>
            <img className='container-img' src="/img/elegirnos.webp" alt="Por que elegirnos"/>
            <div className='text'>
                <h2>¿Por qué elegirnos?</h2>
                <ul>
                <li><CheckCircleIcon/>Cobertura en todo el país</li>
                <li><CheckCircleIcon/>Respuesta inmediata a sus necesidades en un máximo de 2 hs</li>
                <li><CheckCircleIcon/>Abono flexible para el mantenimiento de sus instalaciones, aumentando así la vida útil de las mismas</li>
                <li><CheckCircleIcon/>Contamos con todas las disciplinas para cubrir los diversos rubros que se requieran</li>
                <li><CheckCircleIcon/>Personal registrado y competente con capacidad técnica que brinde calidad en el trabajo asignado</li>
                </ul>
            </div>
            <img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
            </div>
        </section>
    )
}