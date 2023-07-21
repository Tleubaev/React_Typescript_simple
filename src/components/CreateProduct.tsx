import { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }
    setError("");
    setLoading(true);

    productData.title = value;

    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    setLoading(false);
    setValue("");
    onCreate(response.data);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 rounded w-full outline-0"
        placeholder="Enter product title"
        value={value}
        onChange={changeHandler}
      />
      {loading && <Loading />}
      {error && <ErrorMessage error={error} />}
      <button
        type="submit"
        className="py-2 px-4 border rounded bg-yellow-400 hover:text-white duration-300"
      >
        Create
      </button>
    </form>
  );
};

export default CreateProduct;
