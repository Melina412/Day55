import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Products = () => {
  const [productData, setProductData] = useState();

  //   die Daten müssen auf dieser Seite erneut gefetcht werden
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductData(data))
      .catch((error) => console.error("product data fetching error:", error));
  }, []);
  console.log({ productData });

  const id_params = useParams();
  console.log({ id_params });
  console.log("id_params.id:", id_params.id);

  //   useEffect hier nicht nötig wenn man mit ? prüft ob die Daten geladen wurden
  const product_info = productData?.filter((element) => {
    return element.id.toString() === id_params.id;
  });
  console.log({ product_info });

  return (
    <section className="products">
      <Link to={"/"}>Back to Home</Link>
      <article>
        {product_info ? (
          product_info.map((item, index) => (
            <div key={index} className="product">
              <div className="img-container">
                <div
                  className="bg-img"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <p>€ {item.price}</p>
              </div>
              <h1>{item.title}</h1>
              <p className="description">{item.description}</p>
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </article>
    </section>
  );
};

export default Products;
