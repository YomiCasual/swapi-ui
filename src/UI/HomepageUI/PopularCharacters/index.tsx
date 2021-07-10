import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typography from "../../../Components/Typography";

import { useAppSelector } from "../../../Store/ReduxHooks";
import CharacterCard from "../../../Components/CharacterCard";

const PopularCharacters = () => {
  const { characters } = useAppSelector((state) => state.globalState);
  let [selectedcharacters, setSelectedcharacters] = useState<any[]>([]);

  useEffect(() => {
    let newcharacters = [...characters].slice(0, 4);
    setSelectedcharacters(newcharacters);
  }, [characters]);
  return (
    <div className="category characters">
      <div className="category__header-container">
        <Typography variant="h3" classes="category__header">
          Popular Characters
        </Typography>
      </div>
      <div className="category__body">
        {selectedcharacters.map((character, index) => (
          <Fragment key={index}>
            <CharacterCard character={character} />
          </Fragment>
        ))}
      </div>
      <div>
        <Link
          to={{
            pathname: "/characters",
            state: "https://swapi.dev/api/people/?page=1",
          }}
        >
          <button className="button view__more ">View More</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularCharacters;
