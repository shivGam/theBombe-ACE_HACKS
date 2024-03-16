"use client";
import Help from "@/components/Help";
import ImageSelect from "@/components/ImageSelect";
import NewsAndArticles from "@/components/NewsAndArticles";
import Slider from "@/components/Slider";
import Image from "next/image";
import { useState } from "react";
// import { FaHome, FaSearch, FaPlus, FaUser } from "react-icons/fa";
import Result from "./result/page";
import Sidebar from "@/components/sidebar";

export default function Home() {
  const [result, setResult] = useState(false);
  const [sidebar, setsidebar] = useState(false);
  return (
    <div className="bg-white ">
      {result ? (
        <Result setResult={setResult} result={result} />
      ) : (
        <>
          <div className="h-[100px] w-full bg-black relative">
            {sidebar && <Sidebar setsidebar={setsidebar} sidebar={sidebar} />}
            <Slider />
            <div
              className="relative bg-transparent"
              onClick={() => setsidebar(!sidebar)}
            >
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
          {/* <div className="flex items-center justify-center">
            <div className="bottom-nav fixed bottom-4 left-4 w-[90%] max-w-screen-md h-16 bg-[#A6F1A6] shadow-md flex justify-around items-center rounded-full">
              <FaHome className="text-gray-500 hover:text-gray-700 cursor-pointer" />
              <FaSearch className="text-gray-500 hover:text-gray-700 cursor-pointer" />
              <FaPlus className="text-gray-500 hover:text-gray-700 cursor-pointer" />
              <FaUser className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            </div>
          </div> */}
          {/* <footer class="bg-green-500 py-6">
            <div class="container mx-auto flex flex-col items-center justify-center text-center md:flex-row md:justify-between">
              <div class="mb-4 md:mb-0">
                <img
                  src="/user.png"
                  alt="Footer Image"
                  class="h-12 md:h-auto"
                />
              </div>

              <div class="text-white">
                <p class="mb-2">Footer Text</p>
                <p class="text-sm">Additional text goes here</p>
              </div>

              <div class="text-white hidden md:block">
                <p>Other text on the right</p>
              </div>
            </div>
          </footer> */}
        </>
      )}
    </div>
  );
}
