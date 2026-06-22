import HeroBrand from "@/components/home/HeroBrand";
import ThreeDFeature from "@/components/home/ThreeDFeature";
import Marquee from "@/components/home/Marquee";
import LatestProducts from "@/components/home/LatestProducts";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturesStrip from "@/components/home/FeaturesStrip";

const MARQUEE_ITEMS = [
  "RASPBERRY PI 5",
  "ARDUINO UNO Q",
  "ARDUINO NANO",
  "ESP32",
  "EMBEDDED FIRST",
  "OPEN SOURCE",
  "MADE FOR SHIPPING",
];

export default function Home() {
  return (
    <>
      <HeroBrand />
      <ThreeDFeature />
      <Marquee items={MARQUEE_ITEMS} speed="slow" />
      <LatestProducts />
      <Marquee items={["VERIFIED", "INSURED", "WORLDWIDE", "30-DAY RETURNS"]} />
      <CategoryGrid />
      <FeaturesStrip />
    </>
  );
}
