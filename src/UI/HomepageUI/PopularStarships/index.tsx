import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import Typography from "../../../Components/Typography";
import StarshipCard from "../../../Components/StarshipCard";
import { useAppSelector } from "../../../Store/ReduxHooks";
import { useEffect } from "react";

const PopularStarships = () => {
  const { starships } = useAppSelector((state) => state.globalState);
  let [selectedStarships, setSelectedStarships] = useState<any[]>([]);
 

  useEffect(() => {
    let newStarships = [...starships].slice(0, 6);
    setSelectedStarships(newStarships);
  }, [starships]);

  return (
    <div className="category starships">
      <div className="category__header-container">
        <Typography variant="h3" classes="category__header">
          Popular Starships
        </Typography>
      </div>
      <div className="category__body">
        {selectedStarships.map((starship, index) => (
          <Fragment key={index}>
            <StarshipCard starship={starship} index={index} />
          </Fragment>
        ))}
      </div>
      <div>
        <Link
          to={{
            pathname: "/starships",
            state: "https://swapi.dev/api/starships/?page=1",
          }}
        >
          <button className="button view__more ">View More</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularStarships;
