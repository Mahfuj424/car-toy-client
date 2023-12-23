
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "./Testimonial.css";

// import { Pagination, Navigation, Autoplay } from "swiper";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Ananda",
      title: "Happy Customer",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvmFh3UxOkWLzHVS8_c4MDbDNsZhPvvxcXg&usqp=CAU',
      review: "Great experience with their service. The team was professional and responsive. Highly recommended!",
    },
    {
      id: 2,
      name: "Naila Ahmed",
      title: "Satisfied Client",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMsjv2aRDz0wFHZZnjX0ouwL8OJiKG4AEfQ&usqp=CAU',
      review: "I've been a customer for several years and they never disappoint. Excellent products and top-notch  support.",
    },
    {
      id: 3,
      name: "Siyam Khan",
      title: "Happy Customer",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_LmG47_W3RM0QBVGI23-vodL_oOOJxLIBrg&usqp=CAU',
      review: "Their attention to detail is impressive. I keep coming back for more because of their exceptional quality.",
    },
    {
      id: 4,
      name: "Jane Smith",
      title: "Satisfied Client",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJTXWQhh2bNNhKsu3dmndg6aIR2sddOVPkw&usqp=CAU',
      review: "I couldn't be happier with their service. The team went above and beyond to ensure my satisfaction.",
    },
    {
      id: 5,
      name: "Mahfuj Ahmed",
      title: "Happy Customer",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHgUPyeYU1AJPWutzLta21bU6C2BkNwYTCfA&usqp=CAU',
      review: "Their attention to detail is impressive. I keep coming back for more because of their exceptional quality.",
    },
    {
      id: 6,
      name: "Mahbub khan",
      title: "Satisfied Client",
      image: 'https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0=',
      review: "I couldn't be happier with their service. The team went above and beyond to ensure my satisfaction.",
    }
  ];

  return (
    <div className="testimonial-container rounded-xl mt-10 md:p-10 container ">
      <h1 data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className="text-4xl font-bold text-center my-10">All Customer <span className="text-[#F4D160]">Review</span> Here</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true} // Add navigation prop
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000, // Delay between slides (in milliseconds)
          disableOnInteraction: false, // Enable autoplay even when user interacts with the slider
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <div className="p-4 md:p-0">
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500" className="testimonial-item hover:shadow-2xl p-10 rounded-lg">
                <div className="testimonial-content bg-base-200 p-5 rounded-md">

                  <div className="testimonial-details">

                    <div className="testimonial-review">
                      <blockquote className="flex">
                        <span className="quote-icon"><FaQuoteLeft className="text-orange-300" /></span>
                        <p className="testimonial-text">{testimonial.review}</p>
                        <br />
                        <span className="quote-icon1"><FaQuoteRight className="text-orange-300" /></span>
                      </blockquote>
                    </div>

                  </div>
                  <div className="testimonial-image mt-4">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-title">{testimonial.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;