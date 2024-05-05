// import React from "react";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Cart = ({ cart, setCart }) => {
//   const clearProduct = (productId) => {
//     const updatedCart = cart.filter((item) => item.id !== productId);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));

//     toast.success("Item Removed From cart", {
//       position: "top-right",
//       autoClose: 1100,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: false,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//   };

//   const clearCart = () => {
//     setCart([]); // Clear the cart by setting it to an empty array
//     localStorage.removeItem("cart");
//   };
//   return (
//     <>
//       <ToastContainer
//         position="top-right"
//         autoClose={1500}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <div className="container my-5 bg-red-100" style={{ width: "54%" }}>
//         {cart.length == 0 ? (
//           <>
//             <div className="text-center">
//               <h1>Your Cart is Empty</h1>
//               <Link to={"/"} className="btn btn-warning">
//                 Continue Shopping...
//               </Link>
//             </div>
//           </>
//         ) : (
//           cart.map((product) => {
//             return (
//               <>
//                 {/* <div
//                   className="card mb-3 my-5"
//                   style={{ width: "700px" }}
//                   key={product.id}
//                 >
//                   <div className="row g-0">
//                     <div className="col-md-4">
//                       <img
//                         src={product.image}
//                         className="img-fluid rounded-start"
//                         alt="..."
//                       />
//                     </div>
//                     <div className="col-md-8">
//                       <div className="card-body text-center">
//                         <h5 className="card-title">{product.title}</h5>
                       
//                         <button className="btn btn-primary mx-3">
//                           {product.price} ₹
//                         </button>
//                         <button className="btn btn-warning">Buy Now</button>
//                         <button
//                           onClick={() => clearProduct(product.id)}
//                           className="btn btn-warning"
//                         >
//                           🗑️
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}

//                 <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
//                   <div className="h-full w-full md:h-[200px] md:w-[300px]">
//                     <Link to={`/details/${product.id}`}>
//                       <img
//                         src={product.image}
//                         alt="Laptop"
//                         className="h-full w-full rounded-md object-cover"
//                       />
//                     </Link>
//                   </div>
//                   <div>
//                     <div className="p-4">
//                       <h1 className="">{product.title}</h1>
//                       <p className="mt-3 text-sm text-gray-600">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Excepturi, debitis?
//                       </p>

//                       <h1>${product.price}</h1>

//                       <div className="mt-3 flex items-center space-x-2">
//                         <button
//                           onClick={() => clearProduct(product.id)}
//                           className="btn btn-warning"
//                         >
//                           🗑️
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             );
//           })
//         )}
//       </div>

//       {cart.length != 0 && (
//         <div
//           className="container text-center my-5"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <button className="btn btn-warning mx-5 ">CheckOut</button>
//           <button onClick={clearCart} className="btn btn-danger">
//             Clear Cart
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default Cart;
