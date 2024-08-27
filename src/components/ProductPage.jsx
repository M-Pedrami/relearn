import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "./Loading";
const getProduct = async (id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (res) {
      return res.json();
    }
    console.log("An Erro has occured");
  } catch (error) {
    console.log(error);
  }
};

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProduct(id);
        setProduct(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [product]);
  return loading ? (
    <Loading />
  ) : (
    <div>
      This is {product.title} with id number : {id}{" "}
    </div>
  );
};
export default ProductPage;
