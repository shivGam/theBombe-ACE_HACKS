"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaHome,
  FaSearch,
  FaPlus,
  FaUser,
  FaRocketchat,
  FaList,
  FaShoppingBag,
} from "react-icons/fa";
import Result from "../components/Result";
import Slider from "@/components/Slider";
import ImageSelect from "@/components/ImageSelect";
import NewsAndArticles from "@/components/NewsAndArticles";
import Chatbox from "@/components/Chat";
import Help from "@/components/Help";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { RiPlantLine } from "react-icons/ri";
import { TbMedicineSyrup } from "react-icons/tb";

export const doctors = [
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

export default function Home() {
  const [showresult, setShowResult] = useState(false);
  const [image, setImage] = useState("");
  const [result, setResult] = useState(null);
  const [showChat, setShowChat] = useState(true);
  const [sidebar, setShowSidebar] = useState(false);
  const [state, setState] = useState(false);

  const toggleState = () => {
    setState(!state);
  };

  const router = useRouter();
  useEffect(() => {
    // Check if the browser supports the Geolocation API
    if ("geolocation" in navigator) {
      // Request permission for geolocation
      navigator.geolocation.getCurrentPosition(
        // Success callback
        function (position) {
          // Handle successful retrieval of user's location
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);
        },
        // Error callback
        function (error) {
          // Handle errors
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.error("User denied the request for geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.error("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              console.error("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              console.error("An unknown error occurred.");
              break;
          }
        }
      );
    } else {
      // Browser doesn't support Geolocation API
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleFertilizerClick = () => {
    // Navigate to fertilizer recommendation page
    router.push("/fertilizers");
  };

  const handleCropRecommendationClick = () => {
    // Navigate to crop recommendation page
    router.push("/crop-recommendations");
  };

  useEffect(() => {
    localStorage.setItem(
      "threads",
      JSON.stringify([
        {
          id: uuidv4(),
          description:
            "Gray leaf spot on corn, caused by the fungus Cercospora zeae-maydis, is a peren- nial and economically damaging disease in the United States. Since the mid-1990s, the disease has increased in importance in Indiana, and now is the one of the most important foliar diseases of corn in the state.Gray leaf spot disease is caused by the fungus Pyricularia grisea, also referred to as Magnaporthe grisea. The frequent warm rainy periods common in Florida create favorable conditions for this fungal disease. This fungus slows grow-in, thins established stands and can kill large areas of St.",
          prevent:
            "Irrigate deeply, but infrequently.\nAvoid using post-emergent weed killers on the lawn while the disease is active.\nAvoid medium to high nitrogen fertilizer levels.\nImprove air circulation and light level on lawn.\nMow at the proper height and only mow when the grass is dry.",
          supplement_buy_link:
            "https://www.bighaat.com/products/antracol?variant=14521365063&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic",
          supplement_image_url:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTm0wIanaB9OdUkuH9IJ-bHG_qyungwi2lWnmkFmze9VFU1yeSuRO3wImAhPfEJwuBZXPSEf5QwZhieERwrlE5H7lg_8bvf&usqp=CAE",
          supplement_name: "ANTRACOL FUNGICIDE",
          title: "Corn : Cercospora Leaf Spot | Gray Leaf Spot",
          doctorName: doctors[0].name,
          contact: doctors[0].contact,
        },
        {
          id: uuidv4(),
          description:
            "Septoria leaf spot is caused by a fungus, Septoria lycopersici. It is one of the most destructive diseases of tomato foliage and is particularly severe in areas where wet, humid weather persists for extended periods.Septoria leaf spot usually appears on the lower leaves after the first fruit sets. Spots are circular, about 1/16 to 1/4 inch in diameter with dark brown margins and tan to gray centers with small black fruiting structures. Characteristically, there are many spots per leaf. This disease spreads upwards from oldest to youngest growth. If leaf lesions are numerous, the leaves turn slightly yellow, then brown, and then wither. Fruit infection is rare.",
          prevent:
            "Remove diseased leaves. \nImprove air circulation around the plants.\nMulch around the base of the plants. Mulching will reduce splashing soil, which may contain fungal spores associated with debris. Apply mulch after the soil has warmed.\nDo not use overhead watering. Overhead watering facilitates infection and spreads the disease. Use a soaker hose at the base of the plant to keep the foliage dry. Water early in the day.\nControl weeds. Nightshade and horsenettle are frequently hosts of Septoria leaf spot and should be eradicated around the garden site.\nUse crop rotation. Next year do not plant tomatoes back in the same location where diseased tomatoes grew. Wait 1\u20132 years before replanting tomatoes in these areas.\nUse fungicidal sprays.",
          supplement_buy_link:
            "https://farmagritech.com/product/roko-fungicide/?attribute_pa_size=500gm&utm_source=Google%20Shopping&utm_campaign=Google%20shopping%20feed%201&utm_medium=cpc&utm_term=3239",
          supplement_image_url:
            "https://farmagritech.com/wp-content/uploads/2020/05/roko-insecticide.jpg",
          supplement_name: "Roko Fungicide",
          title: "Tomato : Septoria Leaf Spot",
          doctorName: doctors[1].name,
          contact: doctors[1].contact,
        },
        {
          id: uuidv4(),
          description:
            "Although a few rust pustules can always be found in corn fields throughout the growing season, symptoms generally do not appear until after tasseling. These can be easily recognized and distinguished from other diseases by the development of dark, reddish-brown pustules (uredinia) scattered over both the upper and lower surfaces of the corn leaves. These pustules may appear on any above ground part of the plant, but are most abundant on the leaves. Pustules appear oval to elongate in shape, are generally small, less than 1/4 inch long, and are surrounded by the leaf epidermal layer, where it has broken through. ",
          prevent:
            "To reduce the incidence of corn rust, plant only corn that has resistance to the fungus. Resistance is either in the form of race-specific resistance or partial rust resistance. In either case, no sweet corn is completely resistant. If the corn begins to show symptoms of infection, immediately spray with a fungicide.",
          supplement_buy_link:
            "https://agribegri.com/products/buy-online-3-star-m45-mancozeb-75-wp.php",
          supplement_image_url:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT86avIdiTsKNdgo0Uss9r2tkn9pcx6VCGHeaubXDiR0u_fqqyXomgc1BBviREao7BM_eQiR6tbLCzUxG5VzS4du5DgwBVbtwSLuTEexpI&usqp=CAE",
          supplement_name: "3 STAR M45 Mancozeb 75% WP Contact Fungicide",
          title: "Corn : Common Rust",
          doctorName: doctors[2].name,
          contact: doctors[2].contact,
        },
      ])
    );
  }, []);
  return (
    <div className="bg-white ">
      {showresult ? (
        <Result
          setShowResult={setShowResult}
          showresult={showresult}
          setImage={setImage}
          result={result}
        />
      ) : (
        <>
          <Sidebar sidebar={sidebar} setShowSidebar={setShowSidebar} />
          <div className="h-[100px] w-full bg-black relative">
            <Slider />
            <div
              className="relative bg-transparent"
              onClick={() => setShowSidebar(!sidebar)}
            >
              <Image
                width={50}
                height={50}
                src={"/user.png"}
                className="absolute -top-6 right-2 rounded-full shadow-xl"
              />
            </div>
            <div className="mx-6">
              <ImageSelect
                image={image}
                setImage={setImage}
                setShowResult={setShowResult}
                showresult={showresult}
                setResult={setResult}
              />
              {/* <FertilizerSuggestion /> */}
              {/* <SoilAnalysis /> */}
              <div className="flex gap-4 my-8">
                {/* First Card */}
                <Link href="/fertilizers" className="relative w-[48%] h-24">
                  {/* Background image */}
                  <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover rounded-lg shadow-md"></div>
                  {/* Overlay for blackish effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg shadow-md"></div>
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <h3 className="text-white text-sm font-bold text-center">
                      Fertilizer Recommendation
                    </h3>
                  </div>
                </Link>

                {/* Second Card */}
                <Link href="/crop-recommendations" className="relative w-[46%]">
                  {/* Background image */}
                  <div className="absolute inset-0 bg-[url('/bg2.jpg')] bg-cover rounded-lg shadow-md"></div>
                  {/* Overlay for blackish effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg shadow-md"></div>
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <h3 className="text-white text-sm font-bold text-center">
                      Crop Recommendation
                    </h3>
                  </div>
                </Link>
              </div>

              <Help />
              <NewsAndArticles />
            </div>
            <footer className="bg-green-500 dark:bg-gray-900">
              <div className="mx-auto w-full max-w-screen-xl p-4 pt-6 mb-12">
                <div className="md:flex md:justify-between">
                  <div className="mb-6 md:mb-0 flex items-center">
                    <img
                      src={"/logo.jpg"}
                      className="h-12 me-3  bg-transparent rounded-full"
                      alt="FlowBite Logo"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-white">
                      the Bombe
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    {/* Resource links */}
                    <div>
                      <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                        Features{" "}
                      </h2>
                      <ul className="text-white dark:text-white font-medium">
                        <li className="mb-4">
                          <a
                            href="https://flowbite.com/"
                            className="hover:underline"
                          >
                            Crop Recommedation
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tailwindcss.com/"
                            className="hover:underline"
                          >
                            Fertilizers Recommedation
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Follow us links */}
                    <div>
                      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                        Follow us
                      </h2>
                      <ul className="text-white dark:text-white font-medium">
                        <li className="mb-4">
                          <a
                            href="https://github.com/themesberg/flowbite"
                            className="hover:underline"
                          >
                            Github
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href="https://discord.gg/4eeurUVvTy"
                            className="hover:underline"
                          >
                            Discord
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href="https://discord.gg/4eeurUVvTy"
                            className="hover:underline"
                          >
                            Instagram
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Separator line */}
                <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                {/* Copyright and social media icons */}
                <div className="sm:flex sm:items-center sm:justify-between mb-16">
                  <span className="text-sm text-white sm:text-center dark:text-white">
                    © 2024{" "}
                    <a href="/" className="hover:underline">
                      the Bombe™
                    </a>
                    . All Rights Reserved.
                  </span>
                  <div className="flex mt-4 sm:justify-center sm:mt-0">
                    {/* Social media icons */}
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      {/* Facebook icon */}
                    </a>
                    {/* Add more social media icons as needed */}
                  </div>
                </div>
              </div>
            </footer>
          </div>

          <div className="flex items-center justify-center">
            <button className="chatbox__button" onClick={toggleState}>
              <img
                src={"/logo.jpg"}
                alt=""
                className="fixed bottom-20 right-4 bg-white w-16 h-16 rounded-full mb-2"
              />
            </button>
            <div className="bottom-nav fixed bottom-4 left-4 w-[90%] max-w-screen-md h-16 bg-[#A6F1A6] shadow-md flex justify-around items-center rounded-full">
              <FaHome
                size={20}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
              />
              <FaList
                size={20}
                onClick={() => router.push("/threads")}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              />
              <TbMedicineSyrup
                size={25}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() =>
                  (window.location.href = "http://localhost:5173/chat")
                }
              />
              <FaShoppingBag
                size={20}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() =>
                  (window.location.href = "http://127.0.0.1:5500/index.html")
                }
              />
            </div>
          </div>

          <Chatbox state={state} />
        </>
      )}
    </div>
  );
}
