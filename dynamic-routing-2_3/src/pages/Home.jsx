import { Link } from "react-router-dom";
import data from "../assets/data.json";

const Home = () => {
  return (
    <section className="car-list">
      <article className="grid">
        {data.map((car, index) => (
          <div className="car-items" key={index}>
            <h2>{car.CarMake}</h2>
            <Link to={`/${car.id}`}>Read more</Link>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Home;
