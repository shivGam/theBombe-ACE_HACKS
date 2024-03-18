"use client";
// import React, { useState } from "react";
// import axios from "axios";

// const SoilAnalysis = () => {
//   const [formData, setFormData] = useState({
//     nitrogen: "",
//     phosphorus: "",
//     potassium: "",
//     rainfall: "",
//     humidity: "",
//     ph: "",
//     temp: "",
//   });
//   const [jsonResponse, setJsonResponse] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       const data = new FormData();

//       data.append("Nitrogen", nitrogen);
//       data.append("Phosporus", phosphorus);
//       data.append("Potassium", potassium);
//       data.append("Temperature", temp);
//       data.append("Humidity", humidity);
//       data.append("Ph", ph);
//       data.append("Rainfall", rainfall);
//       const response = await axios.post(
//         "http://127.0.0.1:5003/crop-recommend",
//         data
//       );
//       setJsonResponse(response.data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="text-black">
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label className="text-lg font-semibold" htmlFor="nitrogen">
//             Nitrogen
//           </label>
//           <input
//             type="number"
//             id="nitrogen"
//             name="nitrogen"
//             className="border border-black rounded-md px-2 py-1 w-full"
//             placeholder="Nitrogen"
//             value={formData.nitrogen}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label className="text-lg font-semibold" htmlFor="phosphorus">
//             Phosphorus
//           </label>
//           <input
//             type="number"
//             id="phosphorus"
//             name="phosphorus"
//             className="border border-black rounded-md px-2 py-1 w-full"
//             placeholder="Phosphorus"
//             value={formData.phosphorus}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label className="text-lg font-semibold" htmlFor="potassium">
//             Potassium
//           </label>
//           <input
//             type="number"
//             id="potassium"
//             name="potassium"
//             className="border border-black rounded-md px-2 py-1 w-full"
//             placeholder="Potassium"
//             value={formData.potassium}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label className="text-lg font-semibold" htmlFor="calcium">
//             Calcium
//           </label>
//           <input
//             type="number"
//             id="rainfall"
//             name="rainfall"
//             className="border border-black rounded-md px-2 py-1 w-full"
//             placeholder="rainfall"
//             value={formData.rainfall}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label className="text-lg font-semibold" htmlFor="magnesium">
//             Ph
//           </label>
//           <input
//             type="number"
//             id="ph"
//             name="ph"
//             className="border border-black rounded-md px-2 py-1 w-full"
//             placeholder="ph"
//             value={formData.ph}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label className="text-lg font-semibold" htmlFor="sulfur">
//             Sulfur
//           </label>
//           <input
//             type="number"
//             id="temp"
//             name="temp"
//             className="border border-black rounded-md px-2 py-1 w-full"
//             placeholder="temp"
//             value={formData.temp}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label className="text-lg font-semibold" htmlFor="iron">
//             Iron
//           </label>
//           <input
//             type="number"
//             id="humidity"
//             name="humidity"
//             className="border border-black rounded-md px-2 py-1 w-full"
//             placeholder="humidity"
//             value={formData.humidity}
//             onChange={handleChange}
//           />
//         </div>
//       </div>
//       <button
//         className="bg-[#349404] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-4"
//         onClick={handleSubmit}
//       >
//         Submit
//       </button>
//       {jsonResponse && (
//         <div className="mt-8">
//           <h2 className="text-lg font-semibold">Response:</h2>
//           <pre className="bg-gray-200 p-4 rounded-md">
//             {JSON.stringify(jsonResponse, null, 2)}
//           </pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SoilAnalysis;

import React, { useState } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const CropRecommendation = () => {
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [pH, setPH] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [jsonResponse, setJsonResponse] = useState(null);
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const data = new FormData();

      data.append("Nitrogen", nitrogen);
      data.append("Phosporus", phosphorus);
      data.append("Potassium", potassium);
      data.append("Temperature", temperature);
      data.append("Humidity", humidity);
      data.append("Ph", pH);
      data.append("Rainfall", rainfall);
      const response = await axios.post(
        "http://127.0.0.1:5003/crop-recommend",
        data
      );
      setJsonResponse(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log("object");

  return (
    <div className="text-black">
      <div className="flex items-cjustify-between bg-[#A6F1A6] p-4">
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
      </div>{" "}
      <div className="mx-4 mt-4">
        <h3 className="text-[#349404] text-lg font-bold mb-4">
          Crop Recommendation
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-lg font-semibold" htmlFor="nitrogen">
              Nitrogen
            </label>
            <input
              type="number"
              id="nitrogen"
              className="border border-black rounded-md px-2 py-1 w-full"
              placeholder="Nitrogen"
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
              placeholder="Phosphorus"
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
              placeholder="Potassium"
              value={potassium}
              onChange={(e) => setPotassium(e.target.value)}
            />
          </div>
          <div>
            <label className="text-lg font-semibold" htmlFor="temperature">
              Temperature
            </label>
            <input
              type="number"
              id="temperature"
              className="border border-black rounded-md px-2 py-1 w-full"
              placeholder="Temperature"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
          </div>
          <div>
            <label className="text-lg font-semibold" htmlFor="humidity">
              Humidity
            </label>
            <input
              type="number"
              id="humidity"
              className="border border-black rounded-md px-2 py-1 w-full"
              placeholder="Humidity"
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
            />
          </div>
          <div>
            <label className="text-lg font-semibold" htmlFor="ph">
              pH
            </label>
            <input
              type="number"
              id="ph"
              className="border border-black rounded-md px-2 py-1 w-full"
              placeholder="pH"
              value={pH}
              onChange={(e) => setPH(e.target.value)}
            />
          </div>
          <div>
            <label className="text-lg font-semibold" htmlFor="rainfall">
              Rainfall
            </label>
            <input
              type="number"
              id="rainfall"
              className="border border-black rounded-md px-2 py-1 w-full"
              placeholder="Rainfall"
              value={rainfall}
              onChange={(e) => setRainfall(e.target.value)}
            />
          </div>
        </div>
        <button
          className="bg-[#349404] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-4"
          onClick={handleSubmit}
        >
          Recommend
        </button>
        {jsonResponse && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Result:</h2>
            <div className="bg-gray-200 p-4 rounded-md">
              {jsonResponse.result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropRecommendation;
