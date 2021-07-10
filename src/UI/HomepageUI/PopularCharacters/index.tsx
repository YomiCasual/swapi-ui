import Typography from "../../../Components/Typography";
import Character1 from "../../../Assets/Images/character-1.jpg";
import Character2 from "../../../Assets/Images/character-3.jpg";
import Character3 from "../../../Assets/Images/character-2.jpg";
import Character4 from "../../../Assets/Images/character-4.jpg";
import { useAppSelector } from "../../../Store/ReduxHooks";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CharacterImages = [Character1, Character2, Character3, Character4];

const PopularCharacters = () => {
  const { characters } = useAppSelector((state) => state.globalState);
  let [selectedcharacters, setSelectedcharacters] = useState<any[]>([]);

  useEffect(() => {
    if (characters.fetched) {
      let newcharacters = [...characters.data].slice(0, 4);
      setSelectedcharacters(newcharacters);
    }
  }, [characters.fetched, characters.data]);
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
        <button className="button view__more ">View More</button>
      </div>
    </div>
  );
};

export default PopularCharacters;

type CharacterCardProps = {
  character: any;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  // console.log(character);
  const rndInt: number = Math.floor(Math.random() * 3);
  return (
    <div className="character__card">
      <div className="character__card--image">
        <img src={CharacterImages[rndInt]} alt="actor" />
      </div>

      <div className="character__card--body">
        <Typography variant="h3" classes="title">
          {character.name}
        </Typography>
        <Typography variant="p" classes="subtitle">
          Son of Anakin
        </Typography>
        <Typography variant="p" classes="sub">
          Birth Year : {character.birth_year}
        </Typography>
        <Typography variant="p" classes="sub">
          Gender : {character.gender}
        </Typography>

        <Typography variant="p" classes="content">
          Luke skywalker, a force-sensitive human male, was a legendary Jedi
          Master who fought in the galactic Civil war during the reign of of the
          galactic empire
        </Typography>
        <Link
          to={{
            pathname: "/about",
            state: character.url,
          }}
        >
          <Typography variant="p" classes="read_more">
            Read More
          </Typography>
        </Link>
      </div>
    </div>
  );
};
