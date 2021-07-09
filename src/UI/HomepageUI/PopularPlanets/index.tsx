import { useAppSelector } from "../../../Store/ReduxHooks";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typography from "../../../Components/Typography/index";
import PlanetImage1 from "../../../Assets/Images/planet-1.jpg";
import PlanetImage2 from "../../../Assets/Images/planet-2.jpg";
import PlanetImage3 from "../../../Assets/Images/planet-3.jpg";

const PlanetImages = [PlanetImage1, PlanetImage2, PlanetImage3];

const PopularPlanets = () => {
  const { planets } = useAppSelector((state) => state.globalState);
  let [selectedplanets, setSelectedplanets] = useState<any[]>([]);

  useEffect(() => {
    if (planets.fetched) {
      let newplanets = [...planets.data].slice(0, 6);
      setSelectedplanets(newplanets);
    }
  }, [planets.fetched, planets.data]);
  console.log(planets);
  return (
    <div className="category planets">
      <div className="category__header-container">
        <Typography variant="h3" classes="category__header">
          Popular Planets
        </Typography>
      </div>
      <div className="category__body">
        {selectedplanets.map((planet, index) => (
          <Fragment key={index}>
            <PlanetCard
              image={PlanetImage1}
              title="Correllia"
              planet={planet}
            />
          </Fragment>
        ))}
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
  planet: any;
};

const PlanetCard: React.FC<PlanetCardProps> = ({ image, title, planet }) => {
  const rndInt: number = Math.floor(Math.random() * 3);

  return (
    <Link
      to={{
        pathname: "/about",
        state: planet.url,
      }}
    >
      <div className="planet__card">
        <img
          src={PlanetImages[rndInt]}
          className="planet__card--image"
          alt="planet"
        />
        <div className="planet__card--body">
          <Typography variant="h3">{planet.name}</Typography>
        </div>
      </div>
    </Link>
  );
};
