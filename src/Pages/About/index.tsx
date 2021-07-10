import { useEffect, useState } from "react";
import axios from "axios";
import HeroDetails from "../../UI/AboutUI/HeroDetails";
import AboutContent from "../../UI/AboutUI/AboutContent/index";
import { useLocation } from "react-router-dom";
import Loader from '../../Components/Loader/index';

const About = () => {
  const location = useLocation();
  const [aboutDetails, setAboutDetails] = useState<any>(null);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (location.state) {
      axios
        .get(location.state as string)
        .then((data) => {
          setAboutDetails(data.data);
          setFetched(true);
        })
        .catch((err) => console.log(err));
    }
  }, [location.state]);

  if (fetched)
    return (
      <div>
        <HeroDetails aboutDetails={aboutDetails} />
        <AboutContent aboutDetails={aboutDetails} />
      </div>
    );
  else return <Loader />;
};

export default About;
