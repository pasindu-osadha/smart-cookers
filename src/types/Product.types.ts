export type ProductCard={
    id : number,
    name : string,
    description : string,
    price : number,
    url:string
} 
export type ProductProps = {
    productData: {
        id:number,
        name: string,
        description: string,
        url: string,
        price:number,
        qty:number
    };
  };