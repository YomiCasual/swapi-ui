import { Link, useHistory } from "react-router-dom";
import Typography from "../Typography";

const Error = () => {
  const history = useHistory();
  return (
    <div className="error__container">
      <Typography variant="h3" classes="header">
        Oops!
      </Typography>
      <Typography variant="p" classes="sub">
        Seems Like you are lost in Space
      </Typography>
      <Typography variant="p" classes="sub">
        Try refreshing the page or check your internet connection
      </Typography>
      <div className="btn__container">
        <button onClick={() => history.go(0)} className="button reload__btn">
          Reload
        </button>

        <Link to="/">
          <button className="button home__btn">Take me Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
