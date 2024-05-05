import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import Example from "./Example";
import { BsCart4 } from "react-icons/bs";

import styled from "styled-components";









const Btn = styled.div`
  @media (max-width: 479px) {
    position: absolute;
    margin-left:8rem;
  }
`;
const Ctn = styled.div`
  @media (max-width: 479px) {
    position: absolute;
    margin-left: 4rem;
  }
`;










function Navbar() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const cartItems = useSelector((store) => store.cart);
  return (
    <>
      <div
        className="flex justify-between shadow-2xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-100 
  font-bold text-md md:bg-black "
      >
        <div className=" w-[35%]  flex justify-between mt-2 pr-10 ml-10 text-white ">
          <div className=" w-19 h-8 mr-10  transition-all rounded-md ">
            <Link to="/"> Home</Link>
          </div>
          <Ctn>
            <div className=" w-19 h-8 mr-10  transition-all rounded-md">
              <Link to="/About">About</Link>
            </div>
          </Ctn>
          <Btn>
            <div className=" w-19 h-8 mr-10  transition-all rounded-md">
              <Link to="/contact">Contact</Link>
            </div>
          </Btn>
        </div>

        <div className="flex ml-30 gap-3">
          {isAuthenticated ? (
            <>
              <Profile />
            </>
          ) : (
            <button className="mr-10" onClick={() => loginWithRedirect()}>
              <Example />
            </button>
          )}

          {/* <Toggle/> */}
          <h1 className="text-black">
            {cartItems.length > 0 && cartItems.length}
          </h1>
          <Link className="w-10 ml-10 mr-1 text-4xl text-black  " to="/cart">
            <BsCart4 />
          </Link>
        </div>
      </div>

      {/* <button
            //   onClick={() =>
            //     logout({ logoutParams: { returnTo: window.location.origin } })
            //   }
            // >
            //   log out
            // </button> */}
    </>
  );
}

export default Navbar;
