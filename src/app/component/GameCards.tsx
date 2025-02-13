import Image from "next/image";

export default function GameCards({
  title,
  image,
  isOffset,
}: {
  title: string;
  image: string;
  isOffset?: boolean;
}) {
  return (
    <div
      className={`relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${
        isOffset ? "transform translate-y-20" : ""
      }`}
    >
      <div className="aspect-[3/4] relative">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
          width={164}
          height={268}
          sizes="(max-width: 1023px) 164px, 410px"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 lg:pr-4 lg:pt-4 lg:pb-8 lg:pl-8 bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="text-white text-2xl lg:text-5xl font-bold">{title}</h3>
          <p className="text-white/80 text-xs lg:text-sm mt-2 lg:mt-5">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </div>
    </div>
  );
}
