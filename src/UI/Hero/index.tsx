import Logo from "./../../Assets/Images/logo.png";
import Typography from "../../Components/Typography/index";
import { SearchIcon } from "../../Assets/Icons";

const Hero = () => {
  return (
    <div className="hero">
      <nav className="nav">
        <img src={Logo} alt="" className="nav__logo logo" />
      </nav>

      <div className="hero__body">
        <div className="header">
          <img src={Logo} alt="" className="header__logo logo" />
          <Typography variant="h1" classes="header__caption">
            Directory
          </Typography>
        </div>
        <Typography variant="p" classes="hero__sub">
          Find your favorite Characters, Films, Species, Starships and Planets
        </Typography>
        <div>
          <div className="input_group input">
            <SearchIcon classes="input__icon" />
            <input
              type="text"
              className="input__field"
              placeholder="Enter search term"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
