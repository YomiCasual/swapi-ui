import { useEffect } from "react";


// @components
import Error from "../../Components/Error";
import Loader from "../../Components/Loader/index";
import { useAppDispatch, useAppSelector } from "../../Store/ReduxHooks";
import { fetchAllData } from "../../Store/Sagas";
import Hero from '../../UI/HomepageUI/Hero';
import PopularStarships from "../../UI/HomepageUI/PopularStarships";
import PopularCharacters from "../../UI/HomepageUI/PopularCharacters";
import PopularPlanets from "../../UI/HomepageUI/PopularPlanets";

const Home = () => {
  const dispatch = useAppDispatch();

  const { status } = useAppSelector((state) => state.globalState);

  useEffect(() => {
    if (!status) {
      dispatch(fetchAllData());
    }
  }, [dispatch, status]);

  if (status === "loading") return <Loader />;
  else if (status === "failed") return <Error />;
  else
    return (
      <div>
        <Hero />
        <PopularStarships />
        <PopularPlanets />
        <PopularCharacters />
      </div>
    );
};

export default Home;
