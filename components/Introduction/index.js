import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SwiperContainer from '../SwiperContainer'

export default function Introduction(){
    const introImg = [
        {
            src: '/img/intro.webp',
            title: 'Mantenimiento Integral'
        },
        {
            src: '/img/intro.webp',
            title: 'Otro titulo'
        },
        {
            src: '/img/intro.webp',
            title: 'Un tercer título'
        }
    ]
    return (
        <section id="introduction">
            <SwiperContainer imgs={introImg}/>
            <div className="text">
            <p>Ofrecemos una amplia gama de servicios que incluyen Telecomunicaciones, Obras y reformas edilicias, y mantenimiento integral correctivo y preventivo.</p>
            <a href="#">
                <button className="btn white">
                Ver más
                <ArrowForwardIcon/>
                </button>
            </a>
            </div>
        </section>
    )
}