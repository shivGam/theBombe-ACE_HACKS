"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "universal-cookie";

export const Login = () => {
  const cookie = new Cookies();
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:4000/api/users/login",
      data
    );
    if (response.data) {
      alert("Login Successful");
      cookie.set("user", response.data, {
        maxAge: 60 * 60 * 24,
      });
      router.push("/");
    }
  };

  return (
    <div className="mx-4 my-8">
      <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
          <img
            src="/logo.jpg"
            className="w-full bg-transparent rounded-full"
            alt="Sample image"
          />
        </div>
        <h3 className="block dark:text-white text-[#349404] text-2xl font-bold mb-4">
          Farm Buddy | the Bombe
        </h3>
      </div>
      <form
        className="max-w-sm  m-10 mx-auto"
        onSubmit={handleSubmit} // Use handleSubmit function for form submission
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block dark:text-white text-[#349404] text-lg font-bold mb-4"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => setData((p) => ({ ...p, email: e.target.value }))}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block dark:text-white text-[#349404] text-lg font-bold mb-4"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) =>
              setData((p) => ({ ...p, password: e.target.value }))
            }
          />
        </div>

        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
