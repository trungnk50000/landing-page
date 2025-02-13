"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from "next-intl";

const logoItems = Array.from(
  { length: 7 },
  (_, i) => `/images/logo/${i + 1}.png`
);

const SwiperCarousel = () => {
  const t = useTranslations();

  return (
    <div className="w-full py-8 mt-20 bg-[#F6F6F6] h-[478px] flex justify-center items-center flex-col">
      <h2 className="text-center font-bold mb-6 text-4xl lg:text-6xl">
        {t("OurPartners")}
      </h2>
      <Swiper
        spaceBetween={5}
        slidesPerView={5}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="w-[85%] mx-auto relative swiper-custom-nav overflow-visible custom-nav-buttons"
      >
        {logoItems.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Image
              src={src}
              alt={`Partner ${index + 1}`}
              className="h-24 object-contain"
              width={200}
              height={200}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
