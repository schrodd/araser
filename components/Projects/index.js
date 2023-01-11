import { useState } from "react"
import projects from '../../content/projects.js'
import SwiperContainer from '../SwiperContainer'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ApartmentIcon from '@mui/icons-material/Apartment'

export default function Projects(){
    const [projectIndex, setProjectIndex] = useState(0)
    function changeProject(dir) {
        if (dir == 'prev' && projects[projectIndex - 1]){
            setProjectIndex(projectIndex - 1)
        } else if (dir == 'next' && projects[projectIndex + 1]){
            setProjectIndex(projectIndex + 1)
        }
    }
    return (
        <section id='projects'>
            <div className='blue-bg'>
                <img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
            </div>
            <div className="text">
                <div className='title'>
                    <ApartmentIcon fontSize='large'/>
                    <h2>Proyectos</h2>
                </div>
                <p>Lo que nos respalda como empresa son los casos de éxito que hemos llevado a cabo a lo largo de estos años, brindando confiabilidad y acompañamiento a nuestros clientes</p>
                <div className='project-desc'>
                    <h3>{projects[projectIndex].client}</h3>
                    <p>{projects[projectIndex].desc}</p>
                </div>
                <div className='buttons'>
                    <div className={`prev ${projectIndex == 0 && 'disabled'}`}
                    onClick={() => changeProject('prev')}>
                        <ChevronLeftIcon fontSize='large'/>
                    </div>
                    <div className={`next ${!projects[projectIndex + 1] && 'disabled'}`}
                    onClick={() => changeProject('next')}>
                        <ChevronRightIcon fontSize='large'/>
                    </div>
                </div>
            </div>
            
            <SwiperContainer imgs={projects[projectIndex].imgs.map(e => {
                return {src: e}
            })}/>
            
        </section>
    )
}