import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import styles from '@/styles/Slider.module.css'

import { Pagination, Navigation } from "swiper";

import img1 from '/public/22.jpg';
import img2 from '/public/15.jpg';
import img3 from '/public/4.jpg';
import img4 from '/public/5.jpg';
import img5 from '/public/6.jpg';
import img6 from '/public/7.jpg';
import img7 from '/public/8.jpg';
import img8 from '/public/9.jpg';
import img9 from '/public/10.jpg';
import img10 from '/public/11.jpg';
import img11 from '/public/12.jpg';
import img12 from '/public/13.jpg';
import img13 from '/public/14.jpg';
import img14 from '/public/3.jpg';
import img15 from '/public/16.jpg';
import img16 from '/public/17.jpg';
import img17 from '/public/18.jpg';
import img18 from '/public/19.jpg';
import img19 from '/public/20.jpg';
import img20 from '/public/21.jpg';


const Slider = () => {
    return (
        <div className={styles.slider}>
          <Swiper
          style={{
            "--swiper-pagination-color": "#000080",
            "--swiper-navigation-color": "#000080",
            "--swiper-slide-img-object-fit": "cover",
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
            slidesPerView={1}
            spaceBetween={15}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
                <SwiperSlide className={styles.slide}> <Image src={img1} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img2} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img3} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img4} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img5} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img6} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img7} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img8} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img9} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img10} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img11} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img12} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img13} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img14} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img15} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img16} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img17} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img18} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img19} alt="synergistic" height={450} width={400}/> </SwiperSlide>
                <SwiperSlide className={styles.slide}> <Image src={img20} alt="synergistic" height={450} width={400}/> </SwiperSlide>
            </Swiper>
        </div>
           
    )
}
export default Slider