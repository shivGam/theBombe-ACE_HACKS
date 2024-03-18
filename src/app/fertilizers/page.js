"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const FertilizerSuggestion = () => {
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("");
  const [jsonResponse, setJsonResponse] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Construct the JSON object with user inputs
    const requestData = {
      nitrogen,
      phosphorus,
      potassium,
      crop: selectedCrop,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:5004/fertilizer-predict",
        requestData
      );
      if (response.data) {
        console.log(response.data);
        setJsonResponse(response.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="text-black">
      <div className="flex items-center justify-between bg-[#A6F1A6] p-4">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            router.back();
          }}
        >
          <span>
            <FaArrowLeft />
          </span>

          <span>Back</span>
        </div>
      </div>
      <div className="mt-4 mx-4">
        <h3 className="text-[#349404] text-lg font-bold mb-4">
          Fertilizers Recommendation
        </h3>
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-lg font-semibold" htmlFor="nitrogen">
              Nitrogen
            </label>
            <input
              type="number"
              id="nitrogen"
              className="border border-black rounded-md px-2 py-1 w-full"
              placeholder="Enter Nitrogen"
              value={nitrogen}
              onChange={(e) => setNitrogen(e.target.value)}
            />
          </div>
          <div>
            <label className="text-lg font-semibold" htmlFor="phosphorus">
              Phosphorus
            </label>
            <input
              type="number"
              id="phosphorus"
              className="border border-black rounded-md px-2 py-1 w-full"
              placeholder="Enter Phosphorus"
              value={phosphorus}
              onChange={(e) => setPhosphorus(e.target.value)}
            />
          </div>
          <div>
            <label className="text-lg font-semibold" htmlFor="potassium">
              Potassium
            </label>
            <input
              type="number"
              id="potassium"
              className="border border-black rounded-md px-2 py-1 w-full"
              placeholder="Enter Potassium"
              value={potassium}
              onChange={(e) => setPotassium(e.target.value)}
            />
          </div>
          <div>
            <label className="text-lg font-semibold" htmlFor="crops">
              Crops
            </label>
            <select
              id="crops"
              className="border border-black rounded-md px-2 py-1 w-full"
              value={selectedCrop}
              onChange={(e) => {
                console.log("here");
                setSelectedCrop(e.target.value);
              }}
            >
              <option value="">Select Crop</option>
              <option value="rice">Rice</option>
              <option value="maize">Maize</option>
              <option value="chickpea">Chickpea</option>
              <option value="kidneybeans">Kidneybeans</option>
              <option value="pigeonpeas">Pigeonpeas</option>
              <option value="mothbeans">Mothbeans</option>
              <option value="mungbean">Mungbean</option>
              <option value="blackgram">Blackgram</option>
              <option value="lentil">Lentil</option>
              <option value="pomegranate">Pomegranate</option>
              <option value="banana">Banana</option>
              <option value="mango">Mango</option>
              <option value="grapes">Grapes</option>
              <option value="watermelon">Watermelon</option>
              <option value="muskmelon">Muskmelon</option>
              <option value="apple">Apple</option>
              <option value="orange">Orange</option>
              <option value="papaya">Papaya</option>
              <option value="coconut">Coconut</option>
              <option value="cotton">Cotton</option>
              <option value="jute">Jute</option>
              <option value="coffee">Coffee</option>
              {/* Add more crop options as needed */}
            </select>
          </div>
        </form>
        <button
          className="bg-[#349404] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-4"
          onClick={handleSubmit}
        >
          Done
        </button>
        {jsonResponse && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Response:</h2>
            <div className="bg-gray-200 p-4 rounded-md my-2">
              {jsonResponse.title}
            </div>
            <div dangerouslySetInnerHTML={{ __html: jsonResponse?.response }} />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-xl mt-4 mr-4"
              onClick={() => {
                window.location.href = "http://127.0.0.1:5500/index.html";
              }}
            >
              View Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FertilizerSuggestion;
