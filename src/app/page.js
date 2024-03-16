import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white h-[100dvh]">
      <div className="h-[100px] w-full bg-black">
        <Slider />
      </div>
    </div>
  );
}
