import Hero from "../../UI/Hero";
import PopularStarships from "../../UI/PopularStarships";
import PopularPlanets from "../../UI/PopularPlanets";
import PopularCharacters from "../../UI/PopularCharacters";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <PopularStarships />
      <PopularPlanets />
      <PopularCharacters />
    </div>
  );
};

export default Homepage;
