import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Sidebar = ({ sidebar, setsidebar }) => {
  return (
    <>
      {/* Sidebar */}
      {sidebar && (
        <>
          {/* <aside
            id="sidebar-multi-level-sidebar"
            className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
              sidebar ? "translate-x-0" : "-translate-x-full"
            } sm:translate-x-0`}
            aria-label="Sidebar"
          > */}
          <aside
            id="sidebar-multi-level-sidebar"
            class={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ease-out ${
              sidebar ? "translate-x-0" : "-translate-x-full"
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
                <h3 className="text-center mb-1">Ankush</h3>
              </div>
            </div>

            <div className="h-[80%] px-3 py-4 overflow-y-auto bg-slate-100">
              <ul className="flex flex-col justify-center space-x-4">
                <li className="px-6 text-center py-2 ml-5 border-b border-gray-400">
                  <Link href="/">Home</Link>
                </li>
                <li className="px-6 text-center py-2 border-b border-gray-400">
                  <Link href="/threads">Threads</Link>
                </li>
                <li className="px-6 text-center py-2 border-b border-gray-400">
                  <Link href="/fertilizers">Fertilizers Recom.</Link>
                </li>
                <li className="px-6 text-center py-2 border-b border-gray-400">
                  <Link href="/crop-recommendations">Crop Recom.</Link>
                </li>
                <li className="px-6 text-center py-2 border-b border-gray-400">
                  <Link href="/">Settings</Link>
                </li>
              </ul>
            </div>
          </aside>
        </>
      )}
    </>
  );
};

export default Sidebar;
