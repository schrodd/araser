import HandshakeIcon from '@mui/icons-material/Handshake'

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
            <div className='title'>
                <HandshakeIcon fontSize='large'/>
                <h2>Nuestros clientes</h2>
            </div>
            <div className='clients'>
                {clients.map((e,i) => (
                <div key={i} className='item'>
                    <img src={e} alt="client"/>
                </div>
                ))}
            </div>
            </div>
            <img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
        </section>
    )
}