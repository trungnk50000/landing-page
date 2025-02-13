import { setRequestLocale } from "next-intl/server";
import AboutSection from "../component/AboutSection";
import WorldMapWithWitch from "../component/WorldMapWithWitch";
import GameCards from "../component/GameCards";
import SwiperCarousel from "../component/SwiperCarousel";
import Footer from "../component/Footer";

type Props = {
  params: { locale: string };
};

const gameData = [
  { id: "e-space", title: "E-Space", image: "/images/cards/ESpace.png" },
  { id: "kingland", title: "Kingland", image: "/images/cards/Kingland.png" },
  {
    id: "last-game",
    title: "The Last Game",
    image: "/images/cards/Thelastgame.png",
  },
  { id: "g-dragon", title: "G-Dragon", image: "/images/cards/GDragon.png" },
  { id: "pirates", title: "Pirates", image: "/images/cards/Pirates.png" },
  {
    id: "witch-party",
    title: "Witch Party",
    image: "/images/cards/Witchparty.png",
  },
  { id: "rocky", title: "Rocky", image: "/images/cards/Rocky.png" },
  {
    id: "blue-fire",
    title: "Blue Fire",
    image: "/images/cards/Bluefire.png",
  },
  {
    id: "magic-tree",
    title: "Magic tree",
    image: "/images/cards/Magictree.png",
  },
  {
    id: "aborigines",
    title: "Aborigines",
    image: "/images/cards/Aborigines.png",
  },
  {
    id: "cinderella",
    title: "Cinderella",
    image: "/images/cards/Cinderella.png",
  },
  {
    id: "egypt-game",
    title: "Egypt Game",
    image: "/images/cards/EgyptGame.png",
  },
];
export default function IndexPage({ params }: Props) {
  const { locale } = params;
  // Enable static rendering
  setRequestLocale(locale);
  return (
    <>
      <div className="lg:max-w-[1120px] lg:mx-auto px-4 py-16 md:mt-0">
        <AboutSection />
        <WorldMapWithWitch />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {gameData.map((game, index) => (
          <GameCards
            key={game.id}
            title={game.title}
            image={game.image}
            isOffset={index % 4 === 1 || index % 4 === 3}
          />
        ))}
      </div>
      <SwiperCarousel />
      <Footer />
      <div className="bg-black flex justify-center items-center text-white min-h-20">
        2017 Copyright. Policy.
      </div>
    </>
  );
}
