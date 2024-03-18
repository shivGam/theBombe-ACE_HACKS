import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { doctors } from "@/app/page";

const ImageSelect = ({ image, setImage, setShowResult, setResult }) => {
  const [file, setFile] = useState();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (e) => {
    const files = e.target.files[0];
    setFile(files);
    const imageUrl = URL.createObjectURL(files);
    setImage(imageUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        "http://127.0.0.1:5000/submit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data) {
        setResult(response.data);
        setShowResult(true);
      }
      let newData = response.data;
      newData.id = uuidv4();
      const randomIndex = Math.floor(Math.random() * doctors.length);
      newData.doctorName = doctors[randomIndex].name;
      newData.contact = doctors[randomIndex].contact;

      const ls = JSON.parse(localStorage.getItem("threads")) || [];
      ls.push(newData);

      console.log(ls);
      localStorage.setItem("threads", JSON.stringify(ls));
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className=" my-6">
      <h3 className="text-[#349404] text-lg font-bold">
        Plant Disease Dectection
      </h3>
      <div className="mt-6 w-full h-[400px] rounded-xl border bg-[#A6F1A6] flex items-center justify-center shadow-lg">
        <form>
          {!image ? (
            <label
              htmlFor="file_input"
              className="flex flex-col items-center justify-center"
            >
              <input
                className="hidden"
                id="file_input"
                type="file"
                onChange={handleFileChange}
              />
              <Image src={"/camera.png"} width={50} height={50} />
              <div className="mt-8 text-black mx-8 text-center font-semibold text-lg opacity-60 mb-4">
                Tap to Upload Affected Crop Photo
              </div>
            </label>
          ) : (
            <div className="h-full w-full">
              <Image
                src={image}
                width={100}
                height={100}
                alt="crop"
                className="h-[90%] w-[90%] m-4 rounded-lg"
              />
              <div className="flex items-center justify-between">
                <button
                  className="bg-red-500 mb-4 ml-4 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-xl mr-4"
                  onClick={() => setImage(null)}
                >
                  Remove
                </button>
                <button
                  className="bg-green-700 mb-4 ml-4 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-xl mr-4"
                  onClick={handleSubmit}
                >
                  Predict
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ImageSelect;
