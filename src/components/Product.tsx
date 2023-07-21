import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);
  const btnBgClassName = details ? "bg-blue-400" : "bg-yellow-400";
  const btnClasses = ["py-2 px-4 border", btnBgClassName];

  return (
    <div className="border py-4 px-4 rounded flex flex-col items-center mb-2">
      <img className="w-1/6" src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <span className="font-bold">{product.price}</span>
      <button
        onClick={() => setDetails(!details)}
        className={btnClasses.join(" ")}
      >
        {details ? "Hide details" : "Show details"}
      </button>
      {details && <p>{product.description}</p>}
      <p>
        Rating:
        <span style={{ fontWeight: "bold", marginLeft: 5 }}>
          {product?.rating?.rate}
        </span>
      </p>
    </div>
  );
}

export default Product;
