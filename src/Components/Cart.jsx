import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartCard from "./CartCard";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/CartSlice";
import { useState, useEffect } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import styled from "styled-components";






const Container = styled.div`
  @media (max-width: 479px) {
    
    margin-right: 2rem;

    
  }
`;

const Arrow = styled.div`
  @media (max-width: 479px) {
    margin-right: 26rem;
  }
`;




const Cart = () => {
   const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const cartItem = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let total = 0;
    cartItem.forEach((item) => {
      total += item.price.toFixed(2) * item.itemCount;
    });
    setTotalAmount(total);
  }, [cartItem]);

  function handleClearCart() {
    dispatch(clearCart());
    setShowAlert(true);
  }

  return (
    <>
      <div className="w-full flex-wrap gap-x-3 overflow-hidden justify-center pb-5 gap-y-5 flex  px-5 ">
        <Arrow>
          <IoArrowBackCircle
            className="w-10 h-10 ml-5 mt-10 "
            onClick={() => navigate(-1)}
          />
        </Arrow>
        <div className="flex flex-row flex-wrap justify-center  w-fit items-center md:items-start md:flex-col gap-2">
          {cartItem.length === 0 ? (
            <div className="flex gap-2 w-full flex-col justify-center items-center">
              <h1 className="text-xl font-bold">Your cart is empty</h1>
              <Link
                className="font-bold px-3 rounded-md py-1 w-fit bg-black text-white hover:bg-slate-800 transition-all duration-200"
                to="/"
              >
                Start Shopping
              </Link>
              <img
                className="w-[50%] h-[100%]"
                src="https://plus.unsplash.com/premium_photo-1681487985079-b299ac8ba1df?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          ) : (
            <div class="mx-auto max-w-7xl px-2 lg:px-0 flex  ">
              <div class="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Shopping Cart
                </h1>

                {cartItem.map((item) => (
                  <CartCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>

        {cartItem.length > 0 && (
          <>
            <Container>
              <div className=" ">
                <section
                  aria-labelledby="summary-heading"
                  className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0  "
                >
                  <h2
                    id="summary-heading"
                    class=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                  >
                    Price Details
                  </h2>
                  <div className="  ">
                    <dl class=" space-y-1 px-2 py-4 bg-zinc-100 rounded-md ">
                      <div class="flex items-center justify-between ">
                        <dt class="text-sm text-gray-800">
                          Price ({cartItem.length} items)
                        </dt>
                        <dd class="text-sm font-medium text-gray-900">
                          {" "}
                          ₹ {totalAmount.toFixed(2)}
                        </dd>
                      </div>
                      <div class="flex items-center justify-between pt-4">
                        <dt class="flex items-center text-sm text-gray-800">
                          <span>Discount</span>
                        </dt>
                        <dd class="text-sm font-medium text-green-700">
                          - ₹ 3,431
                        </dd>
                      </div>
                      <div class="flex items-center justify-between py-4">
                        <dt class="flex text-sm text-gray-800">
                          <span>Delivery Charges</span>
                        </dt>
                        <dd class="text-sm font-medium text-green-700">Free</dd>
                      </div>
                      <div class="flex items-center justify-between border-y border-dashed py-4 ">
                        <dt class="text-base font-medium text-gray-900">
                          Total Amount
                        </dt>
                        <dd class="text-base font-medium text-gray-900">
                          ₹ {totalAmount.toFixed(2)}
                        </dd>
                      </div>
                    </dl>
                    <div class="px-2 pb-4 font-medium text-green-700">
                      You will save ₹ 3,431 on this order
                    </div>
                  </div>
                  <button
                    onClick={handleClearCart}
                    className="bg-red-500 px-3 py-2 w-16 mt-2 text-xs rounded-md text-white mr-1"
                  >
                    Clear cart
                  </button>
                </section>
              </div>
            </Container>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
