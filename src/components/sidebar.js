import Image from "next/image";
import React, { useState } from "react";

export const Sidebar = ({ sidebar, setsidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button */}
      {/* <button
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button> */}

      {/* Sidebar */}
      {sidebar && (
        <>
          <aside
            id="sidebar-multi-level-sidebar"
            className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
              sidebar && "translate-x-0"
            } sm:translate-x-0`}
            aria-label="Sidebar"
          >
            <div className="h-[20%] px-3 py-4 overflow-y-auto bg-green-500 dark:bg-gray-800">
              <div className="bg-white shadow h-16 w-32 rounded-xl relative mt-3 ml-12 flex flex-col items-center justify-end">
                <Image
                  src={"/user.png"}
                  width={50}
                  height={50}
                  alt="user"
                  className="absolute ml-3 -top-4 left-7"
                />{" "}
                <h3 className="text-center ">Username</h3>
              </div>
            </div>

            <div className="h-[80%] px-3 py-4 overflow-y-auto bg-slate-100"></div>
            <div className="h[60%]"></div>
          </aside>
        </>
      )}
    </>
  );
};

export default Sidebar;
