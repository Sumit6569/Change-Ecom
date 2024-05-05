import React from "react";
import { X } from "lucide-react";
import { useState } from "react";

import { Link } from "react-router-dom";


export function CartThree() {
  const [open, setOpen] = useState(false);
    const toggleOptions = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  return (
    <div
      className="m-auto my-6 w-screen max-w-sm rounded-lg border border-gray-200 p-4 pt-4 shadow-sm sm:p-6 lg:p-8"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <button className="relative ml-auto block text-gray-600 transition hover:scale-110">
        <span className="sr-only">Close cart</span>
        <X size={24} />
      </button>
      <div className="mt-6 space-y-6">
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="flex items-center gap-4">
              <img
                src={product.imageSrc}
                alt={product.name}
                className="h-16 w-16 rounded object-contain"
              />
              <div>
                <h3 className="text-sm text-gray-900">{product.name}</h3>
                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dd className="inline font-bold">{product.price}</dd>
                  </div>
                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">{product.color}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
        <div className="space-y-4 text-center">
          <button
            type="button"
            className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            View Cart (3)
          </button>
          <button
            type="button"
            className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Checkout
          </button>
          <a
            href="#"
            className="inline-block text-sm text-gray-600 transition hover:text-gray-700 hover:underline hover:underline-offset-4"
          >
            Continue shopping &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
