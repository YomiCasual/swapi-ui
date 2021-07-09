import { Fragment, useState } from "react";
import Typography from "../../../Components/Typography";
import StarshipCard from "../../../Components/StarshipCard";
import { useAppSelector } from "../../../Store/ReduxHooks";
import { useEffect,  } from "react";

const PopularStarships = () => {
  const { starships } = useAppSelector((state) => state.globalState);
  let [selectedStarships, setSelectedStarships] = useState<any[]>([]);
  // console.log(starships)

  useEffect(() => {
    if (starships.fetched) {
      let newStarships = [...starships.data].slice(0, 6);
      setSelectedStarships(newStarships)
    }
  }, [starships.fetched, starships.data]);

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
        <button className="button view__more ">View More</button>
      </div>
    </div>
  );
};

export default PopularStarships;
