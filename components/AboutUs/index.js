import ApartmentIcon from '@mui/icons-material/Apartment'
import HelpIcon from '@mui/icons-material/Help';

export default function AboutUs(){
    return (
        <section id='about-us'>
            <div className='icon-title'>
                <ApartmentIcon fontSize='large'/>
                <h2>Sobre nosotros</h2>
            </div>
            <div className='container'>
                <div className='text'>
                    <HelpIcon fontSize='large'/>
                    <h3>¿Quiénes somos?</h3>
                    <p>Nuestra empresa nace por la iniciativa del Ing. Gustavo Aragón quien desde el año 2013 viene desarrollando proyectos a nivel nacional de construcción como ingeniero independiente. En ese momento comenzó brindando servicios de remodelaciones de oficinas, viviendas y mantenimiento integral en la provincia de Tucumán, donde luego se fue expandiendo hacia otras provincias del país.</p>
                    <p>En el año 2021 se constituye Araser SRL, y un año después se incorpora como socio, el Ing. Víctor Aragón especialista en  elecomunicaciones, quien coordina esta nueva división de la empresa.</p>
                    <p>Actualmente, ARASER SRL tiene presencia en toda la República Argentina con base en las provincias de Tucumán y Córdoba.</p>
                </div>
                <img className='container-img' src='/img/quienes.webp' alt='Quienes somos'/>
                <img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
            </div>
        </section>
    )
}