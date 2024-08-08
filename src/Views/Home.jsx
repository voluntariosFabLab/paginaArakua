import CarrouselHome from "../Components/Carrousel/CarrouselHome";
import IndexHome from "../Components/IndexHome/IndexHome";

const Home = () => {
  return (
    <div className="container-home">
      <CarrouselHome />
      <div className="container-details-home" >
        <IndexHome />
      </div>
    </div>
  );
};

export default Home;
