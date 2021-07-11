import { Link } from "react-router-dom";
import Typography from "../Typography";
import PlanetImage1 from "../../Assets/Images/planet-1.jpg";
import PlanetImage2 from "../../Assets/Images/planet-2.jpg";
import PlanetImage3 from "../../Assets/Images/planet-3.jpg";

const PlanetImages = [PlanetImage1, PlanetImage2, PlanetImage3];

type PlanetCardProps = {
  planet: any;
};

const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => {
  const rndInt: number = Math.floor(Math.random() * 3);

  const population =
    planet.population === "unknown"
      ? planet.population
      : parseInt(planet.population).toLocaleString();
  return (
    <div className="planet__card">
      <Link
        to={{
          pathname: "/about",
          state: planet.url,
        }}
      >
        <img
          src={PlanetImages[rndInt]}
          className="planet__card--image"
          alt="planet"
        />
        <div className="planet__card--body">
          <Typography variant="h3">{planet.name}</Typography>
          <div className="details">
            <Typography variant="p">Climate: {planet.climate}</Typography>
            <Typography variant="p">Population: {population}</Typography>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlanetCard;
