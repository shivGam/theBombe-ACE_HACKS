import Help from "@/components/Help";
import ImageSelect from "@/components/ImageSelect";
import NewsAndArticles from "@/components/NewsAndArticles";
import Slider from "@/components/Slider";
import Image from "next/image";
import { FaHome, FaSearch, FaPlus, FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-white ">
      <div className="h-[100px] w-full bg-black relative">
        <Slider />
        <div className="relative bg-transparent">
          <Image
            width={50}
            height={50}
            src={"/user.png"}
            className="absolute -top-6 right-2 rounded-full shadow-xl"
          />
        </div>
        <div className="mx-6">
          <ImageSelect />
          <Help />
          <NewsAndArticles />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="bottom-nav fixed bottom-4 left-4 w-[90%] max-w-screen-md h-16 bg-[#A6F1A6] shadow-md flex justify-around items-center rounded-full">
          <FaHome className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          <FaSearch className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          <FaPlus className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          <FaUser className="text-gray-500 hover:text-gray-700 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
