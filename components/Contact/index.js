import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { motion } from 'framer-motion'
import anims from '../../content/framermotion'

export default function Contact(){
    return (
        <section id="contact">
            <div className="title">
                <LocalPhoneIcon/>
                <h2>Contáctenos</h2>
            </div>
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={anims.container}
            className="wrapper">
                <motion.div variants={anims.item} className="text">
                    <motion.h3 variants={anims.item}>Solicitá tu cotización</motion.h3>
                    <motion.p variants={anims.item}>Póngase en contacto con nosotros y obtenga asesoramiento gratuito para su necesidad.</motion.p>
                    <motion.div variants={anims.item} className="trabaja-con-nosotros">
                        <PersonAddIcon/>
                        <p>¿Querés trabajar con nosotros? <br/> Enviá tu CV a rrhh@araser.com.ar</p>
                    </motion.div>
                </motion.div>
                <motion.div variants={anims.container} className="form">
                    <motion.h3 variants={anims.item}>Envíenos un mensaje</motion.h3>
                    <motion.form variants={anims.container} action="https://formsubmit.co/araser@arasersrl.com" method="post">
                        <motion.input variants={anims.itemRight} type="text" name="Nombre" id="form-firstname" placeholder='Nombre'/>
                        <motion.input variants={anims.itemRight} type="text" name="Apellido" id="form-lastname" placeholder='Apellido'/>
                        <motion.input variants={anims.itemRight} type="number" name="Teléfono" id="form-tlf" placeholder='Teléfono'/>
                        <motion.input variants={anims.itemRight} type="email" name="Email" id="form-email" placeholder='Correo electrónico'/>
                        <motion.input variants={anims.itemRight} type="text" name="Mensaje" id="form-msg" placeholder='Mensaje'/>
                        <button className='btn' type="submit">
                            Enviar mensaje
                            <ArrowForwardIcon/>
                        </button>
                    </motion.form>
                </motion.div>
            </motion.div>
        </section>
    )
}