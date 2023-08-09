import Head from 'next/head'
import NavBar from '../../components/NavBar'
import getTexts from '../../content/translations'
import { useState } from 'react'
import HistoryEduSharpIcon from '@mui/icons-material/HistoryEduSharp';
import tyc from '../../content/tyc';
import tycEn from '../../content/tycEn';
import Footer from '../../components/Footer'
import Link from 'next/link';
import Touch from '../../components/Touch';

function Section({title, text}) {
  return (
    <section className=''>
      <span id={title} className='anchor'></span>
      <h2>{title}</h2>
      {text.map((e,i) => <p key={i}>{e}</p>)}
    </section>
  )
}

export default function Tyc() {
  const [lang, setLang] = useState('es')
  const tycFinal = lang === 'es' ? tyc : tycEn
  return (
    <>
      <Head>
        <title>{getTexts(lang, 'tyctitle')}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ofrecemos una amplia gama de servicios que incluyen Telecomunicaciones, Obras y reformas edilicias, y mantenimiento integral correctivo y preventivo."/>
        <meta name="keywords" content="Araser, Servicio de mantenimiento, Mantenimiento a empresas, Reformas a empresas, Mantenimiento preventivo, Mantenimiento correctivo, Mantenimiento de edificio, Reparación a empresas, Limpieza de vidrios, reformas edilicias, mantenimiento edilicio"/>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="Spanish"/>
      </Head>
      <NavBar lang={lang}/>
      <div className="lang">
        <a href="#" className="es" onClick={() => setLang('es')}>
          <img src="/es.svg" alt="cambiar a idioma español" />
        </a>
        <a href="#" className="en" onClick={() => setLang('en')}>
          <img src="/us.svg" alt="cambiar a idioma ingles" />
        </a>
      </div>
      <main id='tyc'>
        <div className='content'>
          <div className='icon-title'>
              <HistoryEduSharpIcon fontSize='large'/>
              <h1>{lang == 'es' ? 'Términos y Condiciones' : 'Terms and Conditions'}</h1>
          </div>
          <div className='index'>
            <h2>Índice</h2>
            <ul>
              {tycFinal.map((e,i) => (
                <li key={i}><a href={`#${e.title}`}>{e.title}</a></li>
              ))}
            </ul>
          </div>
          {tycFinal.map((e,i) => <Section key={i} title={e.title} text={e.text}/>)}
          <Link href="/"><button className='btn mt'>Volver al inicio</button></Link>
        </div>
      </main>
      <Footer lang={lang} setLang={setLang}/>
      <Touch/>
    </>
  )
}