import React from "react";
import Image from "next/image";

const ImageSelect = () => {
  return (
    <div className=" my-6">
      <h3 className="text-[#349404] text-lg font-bold">
        Plant Disease Dectection
      </h3>
      <div className="mt-6 w-full h-[400px] rounded-xl border bg-[#A6F1A6] flex items-center justify-center">
        <form>
          <label
            htmlFor="file_input"
            className="flex flex-col items-center justify-center"
          >
            <input
              className="hidden"
              id="file_input"
              type="file"
              // onChange={handleFileChange}
            />
            <Image src={"/camera.png"} width={50} height={50} />
            <div className="mt-8 text-black mx-8 text-center font-semibold text-lg opacity-60 mb-4">
              Tap to Upload Affected Crop Photo
            </div>
          </label>
        </form>
      </div>
    </div>
  );
};

export default ImageSelect;
