import { Link } from "react-router-dom";

import Typography from "../Typography";
import Character1 from "../../Assets/Images/character-1.jpg";
import Character2 from "../../Assets/Images/character-3.jpg";
import Character3 from "../../Assets/Images/character-2.jpg";
import Character4 from "../../Assets/Images/character-4.jpg";

const CharacterImages = [Character1, Character2, Character3];

type CharacterCardProps = {
  character: any;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const rndInt: number = Math.floor(Math.random() * 3);
  return (
    <div className="character__card">
      <div className="character__card--image">
        <img src={character.gender === "female" ? Character4 : CharacterImages[rndInt]} alt="actor" />
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

export default CharacterCard;
