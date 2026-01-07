import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    url: 'https://i.ibb.co/G5xw5v3/astrology-1.jpg',
    title: 'Discover Your Horoscope',
  },
  {
    url: 'https://i.ibb.co/QNQyXJv/astrology-2.jpg',
    title: 'Vedic Astrology Insights',
  },
  {
    url: 'https://i.ibb.co/Y0cjft3/astrology-3.jpg',
    title: 'Numerology Magic',
  },
];

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,             // Enable autoplay
    autoplaySpeed: 3000,        // Slide every 3 seconds
    arrows: true,
    pauseOnHover: false,        // Keep sliding even when hovered
  };

  return (
    <div className="max-w-5xl mx-auto my-10 shadow-xl rounded overflow-hidden">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-[350px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 drop-shadow">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
