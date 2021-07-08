import Typography from "../../Components/Typography/index";
import PlanetImage1 from "../../Assets/Images/planet-1.jpg";
import PlanetImage2 from "../../Assets/Images/planet-2.jpg";
import PlanetImage3 from "../../Assets/Images/planet-3.jpg";

const PopularPlanets = () => {
  return (
    <div className="category planets">
      <div className="category__header-container">
        <Typography variant="h3" classes="category__header">
          Popular Planets
        </Typography>
      </div>
      <div className="category__body">
        <PlanetCard image={PlanetImage1} title="Correllia" />
        <PlanetCard image={PlanetImage2} title="Old Mantel" />
        <PlanetCard image={PlanetImage3} title="Endor" />
      </div>
      <div>
        <button className="button view__more ">View More</button>
      </div>
    </div>
  );
};

export default PopularPlanets;

type PlanetCardProps = {
  image: string;
  title: string;
};

const PlanetCard: React.FC<PlanetCardProps> = ({ image, title }) => (
  <div className="planet__card">
    <img src={image} className="planet__card--image" alt="planet" />
    <div className="planet__card--body">
      <Typography variant="h3">{title}</Typography>
    </div>
  </div>
);
