import { useEffect } from "react";
import PopularStarships from "../../UI/HomepageUI/PopularStarships";
import PopularCharacters from "../../UI/HomepageUI/PopularCharacters";
import PopularPlanets from "../../UI/HomepageUI/PopularPlanets";
import { useAppDispatch, useAppSelector } from "../../Store/ReduxHooks";
import Loader from "../../Components/Loader/index";
import { fetchAllData } from "../../Store/Sagas";
import Error from "../../Components/Error";

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
        <PopularStarships />
        <PopularPlanets />
        <PopularCharacters />
      </div>
    );
};

export default Home;
