import { useParams } from "react-router-dom";
import data from "../assets/data.json";

const CarInfo = () => {
  const id_params = useParams();

  console.log({ id_params });
  console.log("id_params.id:", id_params.id);

  const car_info = data.filter((element) => {
    return element.id.toString() === id_params.id;
  });

  console.log({ car_info });
  return (
    <section className="car-info">
      <h2>{car_info[0].CarMake}</h2>
      <h2>{car_info[0].carModel}</h2>
      <h2>{car_info[0].CarYear}</h2>
    </section>
  );
};

export default CarInfo;
