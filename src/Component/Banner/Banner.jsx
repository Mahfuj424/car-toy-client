

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
const Banner = () => {
     return (
          <div>
               <Swiper
                    spaceBetween={30}
                    hashNavigation={{
                         watchState: true,
                    }}
                    pagination={{
                         clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, HashNavigation]}
                    className="mySwiper"
               >
                    <SwiperSlide className='bg-img' data-hash="slide1"><img  src="https://i.ibb.co/JvkksBR/3-19840dfb-4a21-4afa-91e8-78a138fd52fb.webp" alt="" /></SwiperSlide>
                    <SwiperSlide className='bg-img' data-hash="slide2"><img  src="https://i.ibb.co/cCthVSw/Kids-Cars-CA-Home-Page-Banners-1200-x-628-px.webp" alt="" /></SwiperSlide>
                    <SwiperSlide className='bg-img' data-hash="slide3"><img  src="https://i.ibb.co/0rgxBGJ/car.jpg" alt="" /></SwiperSlide>
               </Swiper>
          </div>
     );
};

export default Banner;