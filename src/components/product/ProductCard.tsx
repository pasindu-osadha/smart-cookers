import React from 'react';



export const ProductCard = () => {
    return (
        <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img className="rounded-t-lg" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421834_sd.jpg" alt=""/>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Ninja Power bleder</h5>
            <p className="text-gray-700 text-base mb-4">
             Price Rs.12,000
            </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More </button>
          </div>
        </div>
      </div>
    );
};
