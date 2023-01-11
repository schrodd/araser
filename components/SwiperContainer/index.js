import { Swiper, SwiperSlide } from 'swiper/react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination'

export default function SwiperContainer({imgs}){
    const [swiper, setSwiper] = useState(null)
    return (
        <Swiper
        // spaceBetween={50}
        // slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => setSwiper(swiper)}
        loop
        pagination={{clickable: true}}
        modules={[Autoplay, Pagination]}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false
        }}
        >
            <button className='swipe-left' onClick={() => swiper.slidePrev()}>
                <KeyboardArrowLeftIcon/>
            </button>
            {imgs.map((e,i) => (
                <SwiperSlide key={i}>
                    <img src={e.src} alt={e.title ? e.title : 'swiper image'}/>
                    {e.title && (
                        <div className='slide-title'>
                            <p>{e.title}</p>
                        </div>
                    )}
                </SwiperSlide>
            ))}
            <button className='swipe-right' onClick={() => swiper.slideNext()}>
                <KeyboardArrowRightIcon/>
            </button>
        </Swiper>
    )
}