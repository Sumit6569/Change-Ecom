import React, { useContext } from "react";

import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/CartSlice.js";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "../Utills/axios";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";





const Container = styled.div`
  @media (max-width: 479px) {
    overflow: hidden;
    margin-left: 1rem;
    margin-right: 3rem;
    
  }
`;
const Arr = styled.div`
  @media (max-width: 479px) {
 
    
    display: flex;
  }
`;
const Arrc = styled.div`
  @media (max-width: 479px) {
    position: absolute;
    width: 5rem;
    margin-right: 1rem;
    font-size:5rem;
    
  }
`;
function ProductDetail() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAddItem(product) {
    if (cart.some((item) => item.id === product.id)) {
      console.log("added");
      return;
    }
    dispatch(addToCart(product));

    toast.success("Item added to cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  // old code

  // const cart = useSelector((state) => state.cart);
  // const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  // const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getsingle = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsingle();
  }, []);

  // const addToCart = () => {
  //   const obj = {
  //     id: product.id,
  //     title: product.title,
  //     description: product.description,
  //     image: product.image,
  //   };

  //   setCart([...cart, obj]);
  //   localStorage.setItem("cart", JSON.stringify([...cart, obj]));

  //   toast.success("Item added to cart", {
  //     position: "top-right",
  //     autoClose: 1500,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //   });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Arr>
        <Arrc>
          <IoArrowBackCircle
            className="w-10 h-10 ml-20 mt-10 "
            onClick={() => navigate(-1)}
          />
        </Arrc>
      </Arr>
      <Container>
        <section class="overflow-hidden">
          <div class="mx-auto max-w-5xl px-5 py-24">
            <div class="mx-auto flex flex-wrap items-center lg:w-4/5">
              <img
                alt="Nike Air Max 21A"
                class="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
                src={`${product.image}`}
              />
              <div class="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                <h2 class="text-sm font-semibold tracking-widest text-gray-500">
                  {product.title}
                </h2>
                <h1 class="my-4 text-3xl font-semibold text-black">
                  {product.title}
                </h1>
                <div class="my-4 flex items-center">
                  <span class="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-yellow-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-yellow-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-yellow-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-yellow-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-yellow-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span class="ml-3 inline-block text-xs font-semibold">
                      4 Reviews
                    </span>
                  </span>
                </div>
                <p class="leading-relaxed">{product.description}</p>
                <div class="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                  <div class="flex items-center">
                    <span class="mr-3 text-sm font-semibold">Color</span>
                    <button class="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                    <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                    <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
                  </div>
                  <div class="ml-auto flex items-center">
                    <span class="mr-3 text-sm font-semibold">Size</span>
                    <div class="relative">
                      <select class="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                        <option>8 UK</option>
                        <option>9 UK</option>
                        <option>10 UK</option>
                      </select>
                      <span class="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-chevron-down"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="title-font text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <button
                    type="button"
                    class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={() => handleAddItem(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
export default ProductDetail;
