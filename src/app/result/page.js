import moment from "moment";
import Image from "next/image";
import React from "react";
// import { FaArrowLeft, FaBackward, FaPhone } from "react-icons/fa";

const Result = ({ result, setResult }) => {
  return (
    <div className="text-black">
      <div className="flex items-center justify-between bg-[#A6F1A6] p-4">
        <div className="flex items-center gap-2">
          <span onClick={() => setResult(false)}>{/* <FaArrowLeft /> */}</span>

          <span>Result</span>
        </div>
        <div className="flex">{moment(new Date()).format("DD/MM/YYYY")}</div>
      </div>
      <div className="mx-4 my-8">
        <div className="flex items-center my-4">
          <span className="text-[#349404] text-lg font-bold">
            Test Sampling :
          </span>
          <span className="ml-3">Apple</span>
        </div>
        <div className="flex items-center my-4">
          <span className="text-[#349404] text-lg font-bold">Disease :</span>
          <span className="ml-3">Apple Cedar Rust</span>
        </div>
        <div className="bg-white rounded-lg  mb-8">
          <h2 className="text-[#349404] text-lg font-bold">Cause:</h2>
          <p className="mb-4 mt-2">
            Cedar apple rust (Gymnosporangium juniperi-virginianae) is a fungal
            disease that depends on two species to spread and develop. It spends
            a portion of its two-year life cycle on Eastern red cedar (Juniperus
            virginiana). The pathogen's spores develop in late fall on the
            juniper as a reddish-brown gall on young branches of the trees.
          </p>
        </div>

        <div className="bg-white rounded-lg mb-8">
          <h2 className="text-[#349404] text-lg font-bold">Precaution/Cure:</h2>
          <ol className="list-decimal pl-6 mb-4 mt-2">
            <li className="mb-2">
              Since the juniper galls are the source of the spores that infect
              the apple trees, cutting them is a sound strategy if there aren't
              too many of them.
            </li>
            <li className="mb-2">
              While the spores can travel for miles, most of the ones that could
              infect your tree are within a few hundred feet.
            </li>
            <li className="mb-2">
              The best way to do this is to prune the branches about 4-6 inches
              below the galls.
            </li>
          </ol>
        </div>

        <div className="flex items-center justify-between my-8">
          <div class="w-[140px] h-[80px] bg-[#349404] shadow-md rounded-lg flex items-center justify-center gap-2">
            {/* <FaPhone size={20} color="white" /> */}
            <span className="font-semibold text-lg text-white">Dr Vinod</span>
          </div>
          <div class="w-[140px] px-4 text-center h-[80px] bg-[#349404] shadow-md rounded-lg flex items-center justify-center gap-2">
            <span className="font-semibold text-lg text-white">
              Book Field visit
            </span>
          </div>
        </div>

        <div className="flex">
          <h2 className="text-[#349404] text-lg font-bold">
            Recommended Products :
          </h2>
        </div>
        <div className="flex items-center justify-between">
          <div className="border border-black p-4 rounded-xl">
            <Image src={"/Medicine1.png"} width={100} height={100} />
          </div>
          <div className="flex flex-col justify-center gap-4 my-8">
            <button className="bg-[#349404] hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-xl mr-4">
              Buy Now
            </button>
            <button className="bg-gray-400 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-xl mr-4">
              View Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
