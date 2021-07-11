import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

//@componetns
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import HeroDetails from "../../UI/AboutUI/HeroDetails";
import AboutContent from "../../UI/AboutUI/AboutContent/index";

const About = () => {
  const location = useLocation();
  const [aboutDetails, setAboutDetails] = useState<any>(null);
  const [status, setStatus] = useState<string>("loading");

  useEffect(() => {
    if (location.state) {
      setStatus("loading");
      axios
        .get(location.state as string)
        .then((data) => {
          setAboutDetails(data.data);
          setStatus("success");
        })
        .catch((err) => {
          setStatus("failed");
        });
    } else {
      setStatus("failed");
    }
  }, [location.state]);

  if (status === "loading") return <Loader />;
  else if (status === "failed") return <Error />;
  else
    return (
      <div>
        <HeroDetails aboutDetails={aboutDetails} />
        <AboutContent aboutDetails={aboutDetails} />
      </div>
    );
};

export default About;
