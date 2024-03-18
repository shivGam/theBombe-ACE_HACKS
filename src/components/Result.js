import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft, FaBackward, FaPhone } from "react-icons/fa";

const Result = ({ showresult, result, setShowResult, setImage }) => {
  const router = useRouter();
  return (
    <div className="text-black">
      <div className="flex items-center justify-between bg-[#A6F1A6] p-4">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            console.log("here");
            setImage(null);
            setShowResult(false);
            router.push("/threads");
          }}
        >
          <span>
            <FaArrowLeft />
          </span>

          <span>Result</span>
        </div>
        <div className="flex">{moment(new Date()).format("DD/MM/YYYY")}</div>
      </div>
      <div className="mx-4 my-8">
        <div className="flex items-center my-4">
          <span className="text-[#349404] text-lg font-bold">Disease :</span>
          <span className="ml-3">{result?.title}</span>
        </div>
        <div className="bg-white rounded-lg  mb-8">
          <h2 className="text-[#349404] text-lg font-bold">Cause:</h2>
          <p className="mb-4 mt-2">{result.description}</p>
        </div>

        <div className="bg-white rounded-lg mb-8">
          <h2 className="text-[#349404] text-lg font-bold">Precaution/Cure:</h2>
          <ol className="list-decimal pl-6 mb-4 mt-2">
            {result?.prevent.split(".").map((item, index, items) => (
              <li
                className="mb-2"
                key={index}
                hidden={items.length - 1 == index}
              >
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex items-center justify-between my-8">
          <div class="w-[140px] h-[80px] bg-[#349404] shadow-md rounded-lg flex items-center justify-center gap-2">
            <FaPhone size={20} color="white" />
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
        <h5 className="mt-4 mb-0 font-semibold">{result.supplement_name}</h5>
        <div className="flex items-center justify-between">
          <div className="border border-black p-4 rounded-xl">
            <img src={result.supplement_image_url} width={100} height={100} />
          </div>
          <div className="flex flex-col justify-center gap-4 my-8">
            <button
              className="bg-[#349404] hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-xl mr-4"
              onClick={() =>
                (window.location.href = result.supplement_buy_link)
              }
            >
              Buy Now
            </button>
            <button
              className="bg-gray-400 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-xl mr-4"
              onClick={() => {
                window.location.href = "http://127.0.0.1:5500/index.html";
              }}
            >
              View Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
