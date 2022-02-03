import React from 'react';
type btnProps ={
    name:string
}

export const ProductRouteBtn = (props:btnProps) => {
    return (
        <div>
            <button className="bg-navbarColor hover:bg-lightNavbar text-backgroundColor font-bold py-2 px-4 rounded" >
                {props.name}
            </button>
        </div>
    );
};
