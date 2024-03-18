"use client";
import axios from "axios";
import React, { useState } from "react";

const FertilizerSuggestion = () => {
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("");
  const [jsonResponse, setJsonResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Construct the JSON object with user inputs
    const requestData = {
      nitrogen,
      phosphorous: phosphorus,
      pottasium: potassium,
      cropname: selectedCrop,
    };
    const formData = new FormData();
    formData.append("nitrogen", nitrogen);
    formData.append("phosphorous", phosphorus);
    formData.append("pottasium", potassium);
    formData.append("cropname", selectedCrop);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5004/fertilizer-predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
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
            Enter Crops
          </label>
          <select
            id="crops"
            className="border border-black rounded-md px-2 py-1 w-full"
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
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
          <div className="bg-gray-200 p-4 rounded-md">{jsonResponse.title}</div>
          <div>{jsonResponse.response}</div>
        </div>
      )}
    </div>
  );
};

export default FertilizerSuggestion;
