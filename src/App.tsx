import "./App.scss";
import Homepage from "./Pages/Homepage/index";
import PopularStarships from "./UI/PopularStarships/index";
import PopularPlanets from "./UI/PopularPlanets/index";
import PopularCharacters from "./UI/PopularCharacters/index";

function App() {
  return (
    <div>
      <Homepage />
      <PopularStarships />
      <PopularPlanets />
      <PopularCharacters />
    </div>
  );
}

export default App;
