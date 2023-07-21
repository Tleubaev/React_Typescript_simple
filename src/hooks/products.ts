import { useState, useEffect } from "react";
import { IProduct } from "../models";
import axios, {AxiosError} from "axios";

function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product]);
  }

  async function fetchProducts() {
    try {
      setError("");
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return {products, loading, error, addProduct}
}

export default useProducts;