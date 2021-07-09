import Logo from "./../../../Assets/Images/logo.png";
import Typography from "../../../Components/Typography";
import { IconType } from "../../../Assets/Icons";
// import { SearchIcon } from "../../Assets/Icons";

const HeroDetails = () => {
  return (
    <div className="hero hero__details">
      <nav className="nav">
        <img src={Logo} alt="" className="nav__logo logo" />
      </nav>

      <div className="hero__details--body">
        <div className="details__banner">
          <div className="name__tag">
            <BracketSvg />
            <Typography variant="h3">Corellian Scout</Typography>
            <BracketSvg classes="second__bracket" />
          </div>
          <div className="navigation__icons">
            <NavigationIcon classes="navg__icon" />
            <NavigationIcon classes="navg__icon right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetails;

const BracketSvg = ({ classes }: IconType) => (
  <svg
    className={classes}
    width="65"
    height="65"
    viewBox="0 0 65 121"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M64.5 2H2V119.5H64.5" stroke="white" stroke-width="3" />
  </svg>
);

const NavigationIcon = ({ classes }: IconType) => (
  <svg
    className={classes}
    width="50"
    height="50"
    viewBox="0 0 103 103"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="51.5" cy="51.5" r="49.5" stroke="white" stroke-width="4" />
    <path d="M40 51.5L58 38.0766L58 64.9234L40 51.5Z" fill="white" />
  </svg>
);
