import MapIcon from '@mui/icons-material/Map';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Values(){
    return (
        <section id='mision-vision-valores'>
            <div className='wrapper'>
                <div className='mision'>
                    <MapIcon/>
                    <h2>Misión</h2>
                    <p>Gestión, conservación y creación de todo tipo de infraestructuras, contribuyendo al bienestar social, desarrollo sostenible y generación de valor para nuestros clientes con el propósito de alcanzar la excelencia en nuestros servicios, gracias al compromiso de nuestros profesionales.</p>
                </div>
                <div className='vision'>
                    <VisibilityIcon/>
                    <h2>Visión</h2>
                    <p>Ser reconocidos como una empresa líder en el ámbito nacional e internacional en la prestación de servicios de telecomunicaciones, obras edilicias y mantenimiento integral en empresas y entidades bancarias.</p>
                    <p>Ser referentes por la calidad de nuestros servicios.</p>
                    <p>Alcanzar una cultura de mejora continua mediante la innovación y favorecer el desarrollo personal y profesional de cada uno de los profesionales que forman nuestro equipo.</p>
                </div>
                <div className='valores'>
                    <div className='left'>
                    <FavoriteIcon/>
                    <h2>Valores</h2>
                    <p>En ARASER hemos conseguido unir cuatro valores fundamentales:</p>
                    <p>Proximidad, Autenticidad, Solvencia y Excelencia.</p>
                    <p>Éstos se han convertido en pilares básicos para conseguir nuestros objetivos, con la capacidad de ser una Empresa competitiva, innovadora y comprometida con cada uno de nuestros clientes.</p>
                    </div>
                    <div className='right'>
                    <div className='item'>
                        <h3>Proximidad</h3>
                        <p>Cercanía con cada uno de nuestros clientes, para conseguir ofrecer un servicio personalizado y la confianza necesaria en el desarrollo de cada uno de nuestros proyectos, compartiendo sus necesidades y haciendo sus problemas nuestros. Siendo proactivos y aportando las soluciones necesarias.</p>
                    </div>
                    <div className='item'>
                        <h3>Excelencia</h3>
                        <p>Desde el inicio de la actividad hemos realizado los esfuerzos necesarios para ofrecer una mayor variedad de servicios, mejorando la calidad y recorriendo continuamente los caminos necesarios para continuar avanzando, invirtiendo en todos aquellos mecanismos que nos proporcionen mayor eficiencia cada día.</p>
                    </div>
                    <div className='item'>
                        <h3>Solvencia</h3>
                        <p>Nuestra trayectoria como empresa se traduce en fortaleza y estabilidad, generando confianza a nuestros clientes y proveedores.</p>
                    </div>
                    <div className='item'>
                        <h3>Autenticidad</h3>
                        <p>No somos diferentes al resto de empresas, somos únicos, porque nuestra prestación de servicios y nuestro compromiso es llegar a la satisfacción del cliente.</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}