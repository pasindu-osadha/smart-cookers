import React from 'react';
type btnProps ={
    name:string
}

export const ProductRouteBtn = (props:btnProps) => {
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" >
                {props.name}
            </button>
        </div>
    );
};
