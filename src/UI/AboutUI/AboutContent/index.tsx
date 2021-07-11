import Typography from "../../../Components/Typography/index";
import { HeroDetailsProps } from "../HeroDetails";

const AboutContent: React.FC<HeroDetailsProps> = ({ aboutDetails }) => {
  const { name, ...rest } = aboutDetails;
  return (
    <div>
      <div className="about__content">
        <Typography variant="h3" classes="header">
          {name}
        </Typography>
        <div className="content__container">
          {Object.entries(rest).map(([key, value], index) => (
            <Typography variant="p" classes="content" key={index}>
              <span>{key}:</span> {JSON.stringify(value)}
            </Typography>
          ))}
        </div>
      </div>

      <div className="recent__view category">
        <div className="header__content">
          <Typography variant="h3" classes="header">
            Recently Viewed Starships
          </Typography>
        </div>
        <div className="category__body">
     
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
