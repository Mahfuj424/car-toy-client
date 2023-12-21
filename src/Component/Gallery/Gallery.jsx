import { Swiper, SwiperSlide } from "swiper/react";
// import {  Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import './styles.css'

import group1 from './car toy/race.png'
import group2 from './car toy/police2.jpg'
import group3 from './car toy/car2.jpg'
import group4 from './car toy/race1.jpg'
import group5 from './car toy/police1.jpg'
import group8 from './car toy/car3.png'
import group6 from './car toy/race.jpg'
import group7 from './car toy/car.jpg'

const Gallery = () => {
    return (
        <section className="">
            <h1 className="text-4xl text-bold text-center text-[#F4D160]">Gallery</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                autoplay
                
                pagination={{
                    clickable: true,
                }}
                // modules={[Pagination]}
                className="mySwiper my-10"
            >
                <SwiperSlide>
                    <img src={group1} alt="" />
                    <h2 className="absolute card-hover text-lg text-black bottom-2">Racing Car</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={group2} alt="" />
                    <h2 className="absolute card-hover text-lg text-black bottom-2">Police Car</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={group3} alt="" />
                    <h2 className="absolute card-hover text-lg text-black bottom-2">Trak</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={group4} alt="" />
                    <h2 className="absolute card-hover text-lg text-black bottom-2">Racing Car</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={group5} alt="" />
                    <h2 className="absolute card-hover text-lg text-black bottom-2"> Police Car</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={group6} alt="" />
                    <h2 className="absolute card-hover text-lg text-black bottom-2">Racing Car</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={group7} alt="" />
                    <h2 className="absolute card-hover text-lg text-black bottom-2">Tark</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={group8} alt="" />
                    <h2 className="absolute card-hover text-lg text-black bottom-2">Tark</h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Gallery;