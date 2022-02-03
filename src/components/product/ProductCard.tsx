import { Link } from "react-router-dom";
import { ProductProps } from "../../types/Product.types";


export const ProductCard = (props: ProductProps) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-lightGreen max-w-sm">
        <Link to="#">
          <img className="rounded-t-lg" src={props.productData.url} alt="" />
        </Link>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{props.productData.name}</h5>
          <p className="text-gray-700 text-base mb-4">
            Price Rs.12,000
          </p>
          <button type="button" className=" inline-block px-6 py-2.5 bg-navbarColor text-backgroundColor font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More </button>
        </div>
      </div>
    </div>
  );
};
