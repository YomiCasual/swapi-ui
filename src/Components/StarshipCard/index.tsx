import { Link } from "react-router-dom";
import Typography from "../Typography";
import StarShip1 from "../../Assets/Images/starship-1.jpg";
import StarShip2 from "../../Assets/Images/starship-2.jpg";
import StarShip3 from "../../Assets/Images/starship-3.jpg";
import StarShip4 from "../../Assets/Images/starship-4.jpg";
import StarShip5 from "../../Assets/Images/starship-5.jpg";
import StarShip6 from "../../Assets/Images/starship-6.jpg";
import { ArrowBackIcon } from "../../Assets/Icons";
import { StarshipsData } from "../../Store/GlobalReducer/types";
import { BASE_URL } from "../../Store/Sagas";

const StarshipImages: string[] = [
  StarShip1,
  StarShip2,
  StarShip3,
  StarShip4,
  StarShip5,
  StarShip6,
];

type StarshipCardProps = {
  index?: number;
  starship: StarshipsData;
};


const StarshipCard: React.FC<StarshipCardProps> = ({ starship, index = 1 }) => {
  // const getUrlParams = starship.url.split(BASE_URL)[1]
 
  return (
    <div className="card">
      <div className="card__image">
        <img src={StarshipImages[index]} alt="starships" />
      </div>
      <div className="card__body-overlay">
        <div className="card__body">
          <Typography variant="h3"> {starship.name}</Typography>
          <Typography variant="p">
            The Ghost is a {starship.starship_class}, manufactured by the{" "}
            {starship.manufacturer}
          </Typography>
          <div className="button-group">
            <Link
              to={{
                pathname: "/about",
                state: starship.url,
              }}
            >
              <button className="button btn-primary">
                <span>Read More</span>
                <span className="button__icon">
                  <ArrowBackIcon />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipCard;
