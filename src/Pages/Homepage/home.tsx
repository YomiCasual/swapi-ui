import PopularStarships from "../../UI/HomepageUI/PopularStarships";
import PopularCharacters from "../../UI/HomepageUI/PopularCharacters";
import PopularPlanets from "../../UI/HomepageUI/PopularPlanets/";
import { useAppDispatch, useAppSelector } from "../../Store/ReduxHooks";
import { useEffect } from "react";
import {
  fetchCharacters,
  fetchPlanets,
  fetchStarships,
} from "../../Store/Sagas";

const Home = () => {
  const dispatch = useAppDispatch();

  const { characters, planets, starships } = useAppSelector(
    (state) => state.globalState
  );

  useEffect(() => {
    if (!planets.fetched) {
      console.log("ehere");
      dispatch(fetchPlanets());
    }
    if (!characters.fetched) {
      dispatch(fetchCharacters());
    }
    if (!starships.fetched) {
      dispatch(fetchStarships());
    }
  }, [characters.fetched, planets.fetched, starships.fetched, dispatch]);

  return (
    <div>
    
      <PopularStarships />
      <PopularPlanets />
      <PopularCharacters />
    </div>
  );
};

export default Home;
