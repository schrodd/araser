import Social from '../Social'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import getTexts from '../../content/translations'
import Script from 'next/script'
import Link from 'next/link'

export default function Footer({lang, setLang}){
    return (
        <footer>
            <Script id="metricool">
                {`function loadScript(a){
                    var b=document.getElementsByTagName("head")[0];
                    var c=document.createElement("script");
                    c.type="text/javascript";
                    c.src="https://tracker.metricool.com/resources/be.js";
                    c.onreadystatechange=a;
                    c.onload=a;
                    b.appendChild(c);
                  }
                  loadScript(function(){
                    beTracker.t({hash:"6801246ecc0e92f5618666edd03131e9"})
                  })`}
            </Script>
            <div className="wrapper">
                <div className="col one">
                    <img className='logo' src='/svg/whitelogofull.svg' alt='logo'/>
                    <div className="item">
                        <h3>{getTexts(lang, 'mapa')}</h3>
                        <ul>
                            <li><a href="#">{getTexts(lang, 'navhome')}</a></li>
                            <li><a href="#nosotros-anchor">{getTexts(lang, 'navus')}</a></li>
                            <li><a href="#servicios-anchor">{getTexts(lang, 'navserv')}</a></li>
                            <li><a href="#projects">{getTexts(lang, 'navproy')}</a></li>
                            <li><a href="#contacto-anchor">{getTexts(lang, 'navcont')}</a></li>
                            <li><Link href="/terminos-y-condiciones">{getTexts(lang, 'tyc')}</Link></li>
                        </ul>
                    </div>
                    <div className="item flags">
                        <h3>{getTexts(lang, 'lang')}</h3>
                        <div>
                            <a href="#" className="flags-es" onClick={() => setLang('es')}>
                                <img src="/es.svg" alt="cambiar a idioma español" />
                            </a>
                            <a href="#" className="flags-en" onClick={() => setLang('en')}>
                                <img src="/us.svg" alt="cambiar a idioma ingles" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col two">
                    <div className="item">
                        <h3>{getTexts(lang, 'address')}</h3>
                        <h4>Tucumán | Oficina Central</h4>
                        <p>Congreso 566 Piso 4° Oficina E. San Miguel de Tucumán.</p>
                        <h4>Córdoba | Sede</h4>
                        <p>27 de abril 2410. Córdoba Capital.</p>
                    </div>
                    <div className="item">
                        <h3>{getTexts(lang, 'horario')}</h3>
                        <p>{getTexts(lang, 'horariodesc')}</p>
                    </div>
                    <div className="item">
                        <h3>{getTexts(lang, 'contact')}</h3>
                        <h4>{getTexts(lang, 'phones')}</h4>
                        <p>{getTexts(lang, 'phones1')}</p>
                        <Social/>
                    </div>
                </div>
                <div className="col map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.898773205814!2d-65.18984888495785!3d-26.779496483185113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225fb262e3e21f%3A0xb6c107fa9fd56af9!2sARASER%20SRL!5e0!3m2!1ses-419!2sar!4v1674086362270!5m2!1ses-419!2sar" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='google-map'></iframe>
                </div>
            </div>
            <div className='back-to-top'>
                <button className='btn' onClick={() => {
                    window.scrollTo(0,0)
                }}>
                    {getTexts(lang, 'arr')}
                    <ArrowUpwardIcon/>
                </button>
            </div>
            <img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
        </footer>
    )
}
