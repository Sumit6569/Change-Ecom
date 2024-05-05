import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import {  useNavigate } from "react-router-dom";
import styled from "styled-components";




const Container = styled.div`
  @media (max-width: 479px) {
  overflow: hidden;
   

   
  }
`;
const Social = styled.div`
  @media (max-width: 479px) {
    width: 100%;
    object:center;
  }
`;




function Contact() {
  const navigate = useNavigate();
  return (
    <>
      <IoArrowBackCircle
        className="w-10 h-10 ml-5 mt-10 "
        onClick={() => navigate(-1)}
      />
      <div className="">
        <Container>
          <Social>
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.4716279730305!2d73.04348707570352!3d26.14876547711074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3942207ec550a1e5%3A0x7ce596d865debd49!2sJIET%20Group%20of%20Institutions%2C%20Mogra%20Khurd%2C%20Rajasthan%20342802!5e0!3m2!1shi!2sin!4v1714672877538!5m2!1shi!2sin"
                width="1470"
                height="450"
                style={{ border: "0" }} // Add double curly braces for inline styles
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JIET Group of Institutions"
              ></iframe>
            </div>
          </Social>
          <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
                <div className="text-center pb-6">
                  <h1 className="text-3xl">Contact Us!</h1>
                  <p className="text-gray-300">
                    Fill up the form below to send us a message.
                  </p>
                </div>

                <form action="https://formspree.io/f/mayrvddl" method="POST">
                  <input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Name"
                    name="username"
                    required
                    autoComplete="off"
                  />

                  <input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    autoComplete="off"
                  />

                  <textarea
                    className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Type your message here..."
                    name="message"
                    style={{ height: "100px" }}
                  ></textarea>

                  <div className="flex justify-between">
                    <input
                      className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                      value="Send ➤"
                    />
                    <input
                      className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="reset"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Contact;
