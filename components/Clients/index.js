import HandshakeIcon from '@mui/icons-material/Handshake'
import {motion} from 'framer-motion'
import anims from '../../content/framermotion'

export default function Clients(){
    const clients = [
        '/img/clientes/alderetes.png',
        '/img/clientes/columbia.png',
        '/img/clientes/enacom.png',
        '/img/clientes/experta.png',
        '/img/clientes/farmacity.png',
        '/img/clientes/galicia.png',
        '/img/clientes/gestam.png',
        '/img/clientes/gire.png',
        '/img/clientes/macro.png',
        '/img/clientes/sancor.png',
        '/img/clientes/santander.png',
        '/img/clientes/splice.png',
        '/img/clientes/telecom.png',
        '/img/clientes/telefonica.png',
        '/img/clientes/utn.png',
    ]
    return (
        <section id='clients'>
            <div className="inner">
                <motion.div
                initial={{opacity: 0, x: -200}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1, staggerChildren: .3}}
                className='title'>
                    <HandshakeIcon fontSize='large'/>
                    <motion.h2>Nuestros clientes</motion.h2>
                </motion.div>
                <motion.div
                initial='hidden'
                whileInView='visible'
                variants={anims.container}
                className='clients'>
                    {clients.map((e,i) => (
                    <motion.div variants={anims.item} key={i} className='item'>
                        <motion.img src={e} alt="client"/>
                    </motion.div>
                    ))}
                </motion.div>
            </div>
            <img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
        </section>
    )
}