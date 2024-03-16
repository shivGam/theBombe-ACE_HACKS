import Image from "next/image";
import React from "react";

const Help = () => {
  return (
    <div>
      <h3 className="text-[#349404] text-lg font-bold">Get Help</h3>
      <div className="w-full flex items-center gap-8 overflow-x-auto my-4">
        {Array(10)
          .fill()
          .map((_, index) => {
            return (
              <div className="relative bg-transparent w-full">
                <Image
                  width={50}
                  height={50}
                  src={"/user.png"}
                  className="rounded-full "
                />
                <p className="font-semibold text-black mt-2">Gram</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Help;
