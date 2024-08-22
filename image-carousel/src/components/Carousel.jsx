import React, { useState } from 'react';

const Carousel = ({images}) => {
 

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto ">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index}`} className="w-full flex-shrink-0" />
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white p-2 rounded-full shadow-lg"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white p-2 rounded-full shadow-lg"
      >
        ▶
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
