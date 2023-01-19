import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { motion } from 'framer-motion'
import anims from '../../content/framermotion'
import getTexts from '../../content/translations'

export default function Contact({lang}){
    return (
        <section id="contact">
            <div className="title">
                <LocalPhoneIcon/>
                <h2>{getTexts(lang, 'contact')}</h2>
            </div>
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={anims.container}
            className="wrapper">
                <motion.div variants={anims.item} className="text">
                    <motion.h3 variants={anims.item}>{getTexts(lang, 'cotiz')}</motion.h3>
                    <motion.p variants={anims.item}>{getTexts(lang, 'cotizdesc')}</motion.p>
                    <motion.div variants={anims.item} className="trabaja-con-nosotros">
                        <PersonAddIcon/>
                        <p>{getTexts(lang, 'querestrabajar')}<br/>{getTexts(lang, 'querestrabajar1')}</p>
                    </motion.div>
                </motion.div>
                <motion.div variants={anims.container} className="form">
                    <motion.h3 variants={anims.item}>{getTexts(lang, 'msg')}</motion.h3>
                    <motion.form variants={anims.container} action="https://formsubmit.co/arasersrl@arasersrl.com" method="post">
                        <motion.input variants={anims.itemRight} type="text" name="Nombre" id="form-firstname" placeholder={lang == 'es' ? 'Nombre' : 'First Name'}/>
                        <motion.input variants={anims.itemRight} type="text" name="Apellido" id="form-lastname" placeholder={lang == 'es' ? 'Apellido' : 'Last Name'}/>
                        <motion.input variants={anims.itemRight} type="number" name="Teléfono" id="form-tlf" placeholder={lang == 'es' ? 'Teléfono' : 'Phone Nº'}/>
                        <motion.input variants={anims.itemRight} type="email" name="Email" id="form-email" placeholder={lang == 'es' ? 'Correo electrónico' : 'Email'}/>
                        <motion.input variants={anims.itemRight} type="text" name="Mensaje" id="form-msg" placeholder={lang == 'es' ? 'Mensaje' : 'Message'}/>
                        <button className='btn' type="submit">
                            {getTexts(lang, 'send')}
                            <ArrowForwardIcon/>
                        </button>
                    </motion.form>
                </motion.div>
            </motion.div>
        </section>
    )
}