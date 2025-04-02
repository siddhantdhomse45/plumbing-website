import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data.testimonials));
  }, []);

  return (
    <section className="relative w-full py-16 bg-[#1E364C]">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src="https://mhkit.rometheme.pro/kangpipa/wp-content/uploads/sites/9/2022/07/male-plumber-and-female-customer-in-the-kitchen-2021-08-28-02-49-27-EKTSSW7-a.jpg"
            alt="Client Testimonial"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Right Side - Swiper Testimonial Slider */}
        <div className="w-full lg:w-1/2 text-white p-12 relative z-10 rounded-lg">
          <h4 className="text-orange-500 font-semibold tracking-wide uppercase text-sm">
            Testimonial
          </h4>
          <h2 className="text-4xl font-bold mt-2">What Our Clients Say</h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="mt-6"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="flex flex-col">
                <p className="mt-4 text-gray-300 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <p className="mt-6 italic text-lg text-gray-300 border-l-4 border-orange-500 pl-4">
                  "{testimonial.quote}"
                </p>

                <div className="mt-6 flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-orange-500"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-orange-400 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                <div className="mt-4 flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={18} />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <FaQuoteRight className="absolute bottom-20 right-5 text-orange-500 text-5xl" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
