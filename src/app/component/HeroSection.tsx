import CountdownTimerEvent from "./CountdownTimerEvent";
import Header from "./Header";

export default function HeroSection() {
  const backgroundImageUrl = "/images/bg.png";

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        clipPath: "ellipse(100% 90% at 50% 0%)",
      }}
    >
      <Header />
      <CountdownTimerEvent />
    </div>
  );
}
