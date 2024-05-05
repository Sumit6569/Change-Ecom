import React from "react";
import { Link } from "react-router-dom";

function Cards({ product, func }) {
  return (
    <>
      <Link
        to={`/details/${product.id}`}
        className="card mr-3 mb-3 p-5 border shadow rounded w-[18%] h-[30vh] "
      >
        <div
          className="mb-5 w-full h-[80%] bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${product.thumbnail})`,
          }}
        ></div>
        <h1 className="hover:text-blue-300">{product.title}</h1>
        <p class="text-sm font-medium text-green-500">{product.price}</p>
      </Link>
      {/* <button onClick={() => func(product)} className="btn btn-warning">
        Add To Cart
      </button> */}
    </>
  );
}

export default Cards;
