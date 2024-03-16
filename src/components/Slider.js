"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(2); // Set the initial active slide index
  const images = [0, 0, 0];
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); // Change slide every 1 second

    const carouselItems = document.querySelectorAll("[data-carousel-item]");
    carouselItems.forEach((item, index) => {
      item.classList.toggle("hidden", index !== currentSlide - 1);
    });
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 1 ? images.length : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length ? 1 : prevSlide + 1
    );
  };
  return (
    <div
      id="controls-carousel"
      className="relative w-full h-[100px]"
      data-carousel="static"
    >
      <div className="relative h-56 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hidden duration-700 ease-in-out ${
              index === currentSlide - 1 ? "block" : ""
            }`}
            data-carousel-item={index === currentSlide - 1 ? "active" : ""}
          >
            <Image
              width={100}
              height={100}
              src={`/Banner${currentSlide}.png`}
              className="absolute block w-full h-[100px] object-fill"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* <!-- Slider controls --> */}
      {/* <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={goToPrevSlide}
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            class="w-4 h-4 text-gray-600 dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={goToNextSlide}
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-800/30 ">
          <svg
            class="w-4 h-4 text-gray-600 dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button> */}
    </div>
  );
};

export default Slider;
