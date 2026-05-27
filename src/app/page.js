import Essential from "@/Components/Essential";
import Explore from "@/Components/Explore";
import HeroBanner from "@/Components/HeroBanner";
import Playstyle from "@/Components/Playstyle";
import Rating from "@/Components/Rating";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Rating></Rating>
      <Explore></Explore>
      <Essential></Essential>
      <Playstyle></Playstyle>
    </div>
  );
}
