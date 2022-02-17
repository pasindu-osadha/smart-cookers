import { Link, useNavigate } from "react-router-dom";
import { ProductProps } from "../../types/Product.types";
import { ProductInfoCard } from "./ProductInfoCard";


export const ProductCard = (props: ProductProps) => {



  return (
    <div>
      { 
        <div className="flex justify-center">
          <div className="rounded-lg shadow-lg bg-lightGreen max-w-sm">
            <Link to="#">
              <img className="rounded-t-lg" src={props.productData.product_Picture_Url} alt="" />
            </Link>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">{props.productData.product_Name}</h5>
              <p className="text-gray-700 text-base mb-4">
                Price Rs.{props.productData.product_UnitPrice}
              </p>
              <Link to={`/ProductInfoCard/${props.productData.id}`}><button type="button" onClick={() => <ProductInfoCard />} className=" inline-block px-6 py-2.5 bg-navbarColor text-backgroundColor font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" >More </button>
              </Link> </div>
          </div>
        </div>
      }
    </div>
  );
};
