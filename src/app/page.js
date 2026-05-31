import Essential from "@/Components/Essential";
import Explore from "@/Components/Explore";
import HeroBanner from "@/Components/HeroBanner";
import Playstyle from "@/Components/Playstyle";
import Rating from "@/Components/Rating";
import Review from "@/Components/Review";
import TopItem from "@/Components/TopItem";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Explore></Explore>
      <TopItem />
      <Essential></Essential>
      <Playstyle></Playstyle>
      <Review></Review>
    </div>
  );
}
