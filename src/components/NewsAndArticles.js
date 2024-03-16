import Image from "next/image";
import React from "react";

const NewsAndArticles = () => {
  return (
    <div className="mx-auto">
      <h3 className="text-[#349404] text-lg font-bold">News & Articals </h3>
      <div className="flex items-center justify-between gap-4">
        <div className="w-1/2 rounded-xl shadow my-4">
          <Image
            src="/News1.png"
            alt="Image 1"
            className="w-full h-full"
            width={150}
            height={50}
          />
        </div>
        <div className="w-1/2 rounded-xl shadow my-4">
          <Image
            src="/News2.png"
            alt="Image 2"
            className="w-full h-full"
            width={150}
            height={50}
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="w-1/2 rounded-xl shadow my-4">
          <Image
            src="/News3.png"
            alt="Image 3"
            className="w-full h-full"
            width={150}
            height={50}
          />
        </div>
        <div className="w-1/2 rounded-xl shadow my-4">
          <Image
            src="/News4.png"
            alt="Image 4"
            className="w-full h-full"
            width={150}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsAndArticles;
