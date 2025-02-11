import React, { useState } from "react";
import { productlist } from "../ProductList.js";
import ProductCard from "../components/ProductCard.jsx";
import {SortDropdown} from "../components/SortDropdown.jsx"

const ProductList = () => {
  return (
    <div className="max-h-full w-full	 ">
      <h1 className=" w-full text-center font-light text-3xl my-3">
        Product List
      </h1>
      {/* "Filter and Sort Bar" */}
      <div className=" flex flex-row xl:justify-between mx-2 ">
        {/* "Filter Button" */}
        <div className=" flex justify-center items-center">
          <button className="bg-black hover:bg-white hover:text-black hover:border hover:border-black flex gap-1 items-center w-20 justify-center mx-4 py-1 px-12 rounded-sm transition-colors duration-300 group">
            <div className="group-hover:fill-black">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8286 2.61829L8.97314 7.17102C8.92757 7.22571 8.89339 7.28496 8.87061 7.34876C8.84782 7.41256 8.83643 7.48092 8.83643 7.55384V11.587L7.66064 11.0128V7.55384C7.66064 7.49004 7.64925 7.42395 7.62646 7.3556C7.60368 7.28724 7.5695 7.22571 7.52393 7.17102L3.66846 2.61829H12.8286ZM14.0864 1.45618H2.41064C2.2557 1.45618 2.12126 1.51315 2.00732 1.62708C1.89339 1.74101 1.83643 1.87545 1.83643 2.0304C1.83643 2.10332 1.84782 2.17168 1.87061 2.23548C1.89339 2.29928 1.92757 2.35853 1.97314 2.41321L6.49854 7.77259V11.3683C6.49854 11.4777 6.52816 11.5802 6.5874 11.6759C6.64665 11.7716 6.7264 11.8422 6.82666 11.8878L9.15088 13.0499C9.29671 13.1228 9.4471 13.1342 9.60205 13.0841C9.757 13.034 9.87093 12.936 9.94385 12.7902C9.96208 12.7537 9.97575 12.7127 9.98486 12.6671C9.99398 12.6215 9.99854 12.576 9.99854 12.5304V7.77259L14.5239 2.41321C14.6333 2.28561 14.6812 2.14205 14.6675 1.98255C14.6538 1.82304 14.5832 1.69316 14.4556 1.5929C14.4009 1.54733 14.3416 1.51315 14.2778 1.49036C14.214 1.46757 14.1502 1.45618 14.0864 1.45618Z"
                  className="fill-current text-white group-hover:text-black"
                />
              </svg>
            </div>
            <p className="text-white text-sm font-medium group-hover:text-black">
              FILTER
            </p>
          </button>

          <p className=" hidden xl:block text-sm text-gray-700">
            There are {productlist.length} results in total
          </p>
        </div>
        <SortDropdown />
      </div>
      <div className=" grid xl:gap-3 grid-cols-2 xl:grid-cols-4 xl:mx-6 my-4">
        {productlist.map((el) => {
          return (
            <div key={el.id} className=" w-[200px] pl-4 col-span-1 xl:col-span-1">
              <ProductCard
                imgUrl={el.product_images}
                name={el.product_name}
                price={el.price}
                id={el.id}
                size={el.sizes[0]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};



export default ProductList;
