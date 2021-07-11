import { Fragment, useEffect, useState } from "react";

import { useAppSelector } from "../../../Store/ReduxHooks";

//@components
import PlanetCard from "../../../Components/PlanetCard";
import Typography from "../../../Components/Typography";

const PopularPlanets = () => {
  const { planets } = useAppSelector((state) => state.globalState);
  let [selectedplanets, setSelectedplanets] = useState<any[]>([]);

  useEffect(() => {
    let newplanets = [...planets].slice(0, 6);
    setSelectedplanets(newplanets);
  }, [planets]);

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
            <PlanetCard planet={planet} />
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
