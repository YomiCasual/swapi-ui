import { useEffect } from "react";
import PopularStarships from "../../UI/HomepageUI/PopularStarships";
import PopularCharacters from "../../UI/HomepageUI/PopularCharacters";
import PopularPlanets from "../../UI/HomepageUI/PopularPlanets";
import { useAppDispatch, useAppSelector } from "../../Store/ReduxHooks";
import Loader from "../../Components/Loader/index";
import { fetchAllData } from "../../Store/Sagas";

const Home = () => {
  const dispatch = useAppDispatch();

  const { fetched } = useAppSelector((state) => state.globalState);

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchAllData());
    }
  }, [dispatch, fetched]);

  if (!fetched) return <Loader />;
  return (
    <div>
      <PopularStarships />
      <PopularPlanets />
      <PopularCharacters />
    </div>
  );
};

export default Home;
