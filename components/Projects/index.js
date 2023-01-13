import { useState } from "react"
import projects from '../../content/projects.js'
import SwiperContainer from '../SwiperContainer'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ApartmentIcon from '@mui/icons-material/Apartment'
import { motion } from "framer-motion"

export default function Projects(){
    const [projectIndex, setProjectIndex] = useState(0)
    function changeProject(dir) {
        if (dir == 'prev' && projects[projectIndex - 1]){
            setProjectIndex(projectIndex - 1)
        } else if (dir == 'next' && projects[projectIndex + 1]){
            setProjectIndex(projectIndex + 1)
        }
    }
    const animations = {
        container: {
            hidden: {opacity: 0, x: -100},
            visible: {
                opacity: 1, 
                x: 0, 
                transition: {
                    duration: 1
                }
            },
        },
        container2: {
            hidden: {opacity: 0, x: 100},
            visible: {
                opacity: 1, 
                x: 0, 
                transition: {
                    duration: 1
                }
            },
        },
        item: {
            hidden: {opacity: 0, x: -100},
            visible: {
                opacity: 1, 
                x: 0, 
                transition: {
                    duration: 1
                }
            },
        }
    }
    return (
        <section id='projects'>
            <div className='blue-bg'>
                <img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
            </div>
            <motion.div
            variants={animations.container}
            initial='hidden'
            whileInView='visible'
            className="text">
                <motion.div variants={animations.item} className='title'>
                    <ApartmentIcon fontSize='large'/>
                    <motion.h2 variants={animations.item}>Proyectos</motion.h2>
                </motion.div>
                <motion.p variants={animations.item}>Lo que nos respalda como empresa son los casos de éxito que hemos llevado a cabo a lo largo de estos años, brindando confiabilidad y acompañamiento a nuestros clientes</motion.p>
                <motion.div
                className='project-desc'>
                    <motion.h3 variants={animations.item}>{projects[projectIndex].client}</motion.h3>
                    <motion.p variants={animations.item}>{projects[projectIndex].desc}</motion.p>
                </motion.div>
                
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
            </motion.div>
            
            <motion.div
            variants={animations.container2}
            initial='hidden'
            whileInView='visible'
            >
                <SwiperContainer imgs={projects[projectIndex].imgs.map(e => {
                    return {src: e}
                })}/>
            </motion.div>
            
        </section>
    )
}