import Head from 'next/head'
import NavBar from '../components/NavBar'
import HomeSection from '../components/HomeSection'
import Introduction from '../components/Introduction'
import AboutUs from '../components/AboutUs'
import Values from '../components/Values'
import Objective from '../components/Objective'
import Clients from '../components/Clients'
import Services from '../components/Services'
import ServicesDetails from '../components/ServicesDetails'
import ServiceAssistance from '../components/ServiceAssistance'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Script from 'next/script'
import { useState } from 'react'
import getTexts from '../content/translations'
import Touch from '../components/Touch'

export default function Home() {
  const [lang, setLang] = useState('es')
  return (
    <>
      <Script id='preventscrollreset'>
        history.scrollRestoration = &quot;manual&quot;
      </Script>
      <Head>
        <title>{getTexts(lang, 'title')}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ofrecemos una amplia gama de servicios que incluyen Telecomunicaciones, Obras y reformas edilicias, y mantenimiento integral correctivo y preventivo."/>
        <meta name="keywords" content="Araser,Servicio de mantenimiento ,Mantenimiento a empresas,Reformas a empresas,Mantenimiento preventivo,Mantenimiento correctivo,Mantenimiento de edificio,Reparación a empresas,Limpieza de vidrios,reformas edilicias,mantenimiento edilicio"/>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="Spanish"/>
      </Head>
      <NavBar lang={lang}/>
      <img className="main-background" src="/bg.jpg" alt="background image"/>
      <HomeSection lang={lang}/>
      <Introduction lang={lang}/>
      <AboutUs lang={lang}/>
      <Values lang={lang}/>
      <Objective lang={lang}/>
      <Clients lang={lang}/>
      <Services lang={lang}/>
      <ServicesDetails lang={lang}/>
      <ServiceAssistance lang={lang}/>
      <Projects lang={lang}/>
      <Contact lang={lang}/>
      <Footer lang={lang} setLang={setLang}/>
      <Touch/>
      <div className="whatsapp-icon">
        <a href="https://wa.me/+5493816782424?text=Hola!%20Me%20gustar%C3%ADa%20consultar%20m%C3%A1s%20informaci%C3%B3n%20sobre...">
          <img src="/wspicon.png" alt="whatsapp icon"/>
        </a>
      </div>
      <div className="lang">
        <a href="#" className="es" onClick={() => setLang('es')}>
          <img src="/es.svg" alt="cambiar a idioma español" />
        </a>
        <a href="#" className="en" onClick={() => setLang('en')}>
          <img src="/us.svg" alt="cambiar a idioma ingles" />
        </a>
      </div>
    </>
  )
}