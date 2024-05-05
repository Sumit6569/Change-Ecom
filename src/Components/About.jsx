import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  
  @media (max-width: 479px) {
    width: calc(50% - 2rem); /* Half width minus margins */
    margin-left: 1rem;
   
    display: flex;
  }
`;
const Social = styled.div`
  @media (max-width: 479px) {
    
    opacity:0;
  }
`;
const Img = styled.div`
  @media (max-width: 479px) {
    position: absolute;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: black;
    margin-top: 2rem;
    margin-left: 25rem;

  }
`;
const Btn = styled.div`
  @media (max-width: 479px) {
    position: absolute;
    width: 5rem;
    height: 5rem;
    
  margin-bottom: 6rem;
    margin-left: 5rem;
    shadow: 50rem;
  }
`;

function About() {
  const navigate = useNavigate();
  return (
    <>
      <IoArrowBackCircle
        className="w-10 h-10 ml-5 mt-10 "
        onClick={() => navigate(-1)}
      />
      <div className=" h-screen w-screen   flex items-end justify-center mt-5  flex-wrap">
        <div>
          <h6>hello</h6>
        </div>
        <section className="relative block h-500-px mt-25 bg-red-100">
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>

        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg -mt-64">
              <div className="px-6">
                <Container>
                  <div className="flex  justify-center ">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center ">
                      <Img>
                        <img
                          className=" w-20 h-20 rounded-full absolute mt-30 "
                          src="./GK.jpg"
                          alt=""
                        />
                      </Img>
                    </div>

                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <Btn>
                          <a
                            href="https://www.linkedin.com/in/sumit-kumar-8abb45283/"
                            className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                            type="button"
                          >
                            Connect
                          </a>
                        </Btn>
                      </div>
                    </div>
                    <Social>
                      <div className="w-full lg:w-4/12 px-4 lg:order-1">
                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                          <div className="mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                              22
                            </span>
                            <span className="text-sm text-blueGray-400">
                              Friends
                            </span>
                          </div>
                          <div className="mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                              10
                            </span>
                            <span className="text-sm text-blueGray-400">
                              Photos
                            </span>
                          </div>
                          <div className="lg:mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                              89
                            </span>
                            <span className="text-sm text-blueGray-400">
                              Comments
                            </span>
                          </div>
                        </div>
                      </div>
                    </Social>
                  </div>
                </Container>
                <div className="text-center mt-12 relative ">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    SUMIT KUMAR
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    JODHPUR, RAJSTHAN
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    B.Tech(Computer Science and Engineering)
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    Jiet Group Of Institution
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a href="#pablo" className="font-normal text-pink-500">
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Made with{" "}
                    <a
                      href="https://www.creative-tim.com/product/notus-js"
                      className="text-blueGray-500 hover:text-gray-800"
                      target="_blank"
                    >
                      REACT JS
                    </a>{" "}
                    by{" "}
                    <a
                      href="https://www.creative-tim.com"
                      className="text-blueGray-500 hover:text-blueGray-800"
                      target="_blank"
                    >
                      {" "}
                      SUMIT
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
}

export default About;
