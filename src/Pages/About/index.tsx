import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

//@componetns
import HeroDetails from "../../UI/AboutUI/HeroDetails";
import AboutContent from "../../UI/AboutUI/AboutContent/index";
import Loader from "../../Components/Loader";
import Footer from "../../Components/Footer";
import Error from "../../Components/Error";

const About = () => {
  const location = useLocation();
  const [aboutDetails, setAboutDetails] = useState<any>(null);
  const [status, setStatus] = useState<string | null>("loading");

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
        <Footer />
      </div>
    );
};

export default About;
