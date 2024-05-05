import React from "react";

import { Link, useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import { useAuth0 } from "@auth0/auth0-react";
import { IoArrowBackCircle } from "react-icons/io5";
function Login() {
  //   function handleLogin(event) {
  //     event.preventDefault();
  //     return toast.error("Login functionality is not live yet");
  //   }
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth0();

  return (
    <>
      <IoArrowBackCircle
        className="w-10 h-10 ml-5 mt-10 "
        onClick={() => navigate(-1)}
      />
      <div className="w-full h-[60%]  flex justify-center mt-10 ">
        <div className="w-[20%]  h-[30%]  ml-50 flex flex-col shadow-lg ">
          <div class="relative h-[400px] w-[300px] rounded-md shadow-lg ">
            <img
              src={user.picture}
              alt={user.name}
              class="z-0 h-full w-full rounded-md object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-left">
              <h1 class="text-lg font-semibold text-white">{user.name}</h1>
              <p class="mt-2 text-sm text-gray-300">{user.email}</p>
              <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                View Profile →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
