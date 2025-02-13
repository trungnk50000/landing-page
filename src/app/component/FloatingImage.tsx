import React from "react";
import Image from "next/image";

export default function FloatingImage() {
  return (
    <div className="w-full flex justify-center items-center xl:flex-none z-10">
      <Image
        src="/ongtien.png"
        alt="logo"
        width="342"
        height="243"
        sizes="(max-width: 1280) 700px, 500px"
        className="w-[342px] h-[350px] object-cover
                   absolute top-[77vh] xl:left-[-4%] xl:top-[17vh]
                   xl:w-[700px] xl:h-[700px]"
      />
    </div>
  );
}
