import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProducts(response);
      setLoading(false);
    };
    fetchProducts();
  }, []);
  console.log(products);

  return loading ? (
    <Loading />
  ) : (
    <div className="w-fit grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 gap-x-1 p-10">
      {products.map((product) => (
        <div className="w-fit" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
export default Products;
