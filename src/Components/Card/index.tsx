import Typography from "../Typography";
import StarShipImg1 from "../../Assets/Images/starship-1.jpg";
import { ArrowBackIcon } from "../../Assets/Icons";

const Card = () => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={StarShipImg1} alt="starships" />
      </div>
      <div className="card__body-overlay">
        <div className="card__body">
          <Typography variant="h3"> Ghost</Typography>
          <Typography variant="p">
            The Ghost is a modified VC-100 light freighter, manufactured by the
            corellian Engineering coperation
          </Typography>
          <div className="button-group">
            <button className="button btn-primary">
              <span>Read More</span>
              <span className="button__icon">
                <ArrowBackIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
