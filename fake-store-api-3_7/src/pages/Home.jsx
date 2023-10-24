import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [storeData, setStoreData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setStoreData(data))
      .catch((error) => console.error("store data fetching error:", error));
  }, []);

  console.log({ storeData });

  return (
    <section className="home">
      <h1>Willkommen</h1>
      <article className="store">
        {storeData ? (
          storeData.map((item, index) => (
            <div className="item" key={index}>
              <div className="img-container">
                <img src={item.image} alt={item.title} />
              </div>
              <p>{item.title}</p>
              <p>{item.price} €</p>
              <Link to={`/products/${item.id}`}>Show more</Link>
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </article>
    </section>
  );
};

export default Home;
