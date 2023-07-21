import { useContext } from "react";

import Product from "../components/Product";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import useProducts from "../hooks/products";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalContext";

function ProductsPage() {
  const { products, loading, error, addProduct } = useProducts();
  const {
    modal,
    open: openModal,
    close: closeModal,
  } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    closeModal();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loading />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={() => closeModal()}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="fixed bottom-5 right-5 px-4 py-2 rounded-full bg-blue-600 text-white duration-500 hover:text-lg"
        onClick={() => openModal()}
      >
        Open Modal
      </button>
    </div>
  );
}

export default ProductsPage;
