import React from "react";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
const Home = () => {
  const [loading, setloading] = useState(false);
  const [products, setProducts] = useState({});
  async function getProducts() {
    setloading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const item = await response.json();
    setProducts(item);
    setloading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner></Spinner>
      ) : products.length > 0 ? (
        <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {products.map((product) => {
            return (
              <Card
                id={product.id}
                key={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                rating={product.rating}
              ></Card>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center">No Data Found</div>
      )}
    </div>
  );
};

export default Home;
