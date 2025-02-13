import React from "react";
import PinMapSvg from "./PinMapSvg";
import Image from "next/image";
import { useTranslations } from "next-intl";
const WorldMapWithWitch = () => {
  const t = useTranslations();
  return (
    <div className="relative w-full flex flex-col items-center justify-center mt-10">
      <div className="relative z-10 -mb-20 animate-float flex flex-col items-center justify-center">
        <Image
          src="/witch.png"
          alt="witch logo"
          width="300"
          height="243"
          className="w-auto h-auto object-cover"
          sizes="(max-width: 1023px) 437px, 533px"
        />
        <div className="mt-4">
          <PinMapSvg />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center p-12 mt-8">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          {t("OurGamesTitle")}
        </h1>
        <p className="text-sm md:text-base">{t("OurGamesDescription")}</p>
      </div>
    </div>
  );
};

export default WorldMapWithWitch;
