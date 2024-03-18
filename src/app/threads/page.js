"use client";
import React from "react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Aarav Patel",
    location: "Mumbai",
    contact: "+91 9876543210",
  },
  {
    name: "Dr. Nandini Sharma",
    location: "Delhi",
    contact: "+91 9876543211",
  },
  {
    name: "Dr. Vikram Singh",
    location: "Jaipur",
    contact: "+91 9876543212",
  },
  {
    name: "Dr. Sneha Reddy",
    location: "Hyderabad",
    contact: "+91 9876543213",
  },
  {
    name: "Dr. Rohan Joshi",
    location: "Bangalore",
    contact: "+91 9876543214",
  },
];

const PastDiseases = () => {
  const router = useRouter();

  // Sample data for past detected diseases

  const pastDiseases = JSON.parse(localStorage.getItem("threads")) || [];

  const handleItemClick = (diseaseId) => {
    // Redirect to the results page with the selected disease ID
    router.push(`/results/${diseaseId}`);
  };

  return (
    <div className="text-black ">
      <h1
        className="flex items-center bg-[#A6F1A6] p-4 shadow-md"
        onClick={() => router.push("/")}
      >
        <span>
          <FaArrowLeft className="mr-2" />
        </span>
        Past Detected Diseases
      </h1>
      <div className="mx-4">
        <h3 className="text-[#349404] text-lg font-bold mt-4">Threads</h3>
        {pastDiseases.reverse().map((disease) => {
          const randomIndex = Math.floor(Math.random() * doctors.length);
          const randomDoctor = doctors[randomIndex];
          return (
            <div
              key={disease.id}
              className="bg-[#A6F1A6] p-4 my-4 rounded-lg cursor-pointer"
              onClick={() => handleItemClick(disease.id)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold mr-4">{disease.title}</span>
                </div>
                <div className="text-sm text-end">
                  <span>{randomDoctor.name || "Dr. Vinod"}</span>
                  <br />
                  <span>{moment(disease.date).format("DD/MM/YYYY")}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PastDiseases;
