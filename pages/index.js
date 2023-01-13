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

export default function Home() {
  
  return (
    <>
      <Head>
        <script>history.scrollRestoration = "manual"</script>
        <title>Araser SRL | Telecomunicaciones y Obras Edilicias</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <img className="main-background" src="/bg.jpg" alt="background image"/>
      <HomeSection/>
      <Introduction/>
      <AboutUs/>
      <Values/>
      <Objective/>
      <Clients/>
      <Services/>
      <ServicesDetails/>
      <ServiceAssistance/>
      <Projects/>
      <Contact/>
    </>
  )
}