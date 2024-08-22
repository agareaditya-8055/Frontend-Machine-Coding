import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 object-cover rounded-lg"
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-2 md:left-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
      >
        <FaChevronLeft className="text-gray-700" size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-2 md:right-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
      >
        <FaChevronRight className="text-gray-700" size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-colors ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
