import Typography from "../../../Components/Typography";
import Character1 from "../../../Assets/Images/character-1.jpg";

const PopularCharacters = () => {
  return (
    <div className="category characters">
      <div className="category__header-container">
        <Typography variant="h3" classes="category__header">
          Popular Characters
        </Typography>
      </div>
      <div className="category__body">
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
      <div>
        <button className="button view__more ">View More</button>
      </div>
    </div>
  );
};

export default PopularCharacters;

const CharacterCard = () => (
  <div className="character__card">
    <div className="character__card--image">
      <img src={Character1} alt="actor" />
    </div>

    <div className="character__card--body">
      <Typography variant="h3" classes="title">
        Luke Skywalker
      </Typography>
      <Typography variant="p" classes="subtitle">
        Son of Anakin
      </Typography>

      <Typography variant="p" classes="content">
        Luke skywalker, a force-sensitive human male, was a legendary Jedi
        Master who fought in the galactic Civil war during the reign of of the
        galactic empire
      </Typography>
      <Typography variant="p" classes="read_more">
        Read More
      </Typography>
    </div>
  </div>
);
