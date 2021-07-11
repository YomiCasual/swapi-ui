import { useKeenSlider } from "keen-slider/react";


import Typography from "../../../Components/Typography/index";
import { useAppSelector } from "../../../Store/ReduxHooks";
import { HeroDetailsProps } from "../HeroDetails";
import { useState } from "react";
import StarshipCard from "../../../Components/StarshipCard";

const AboutContent: React.FC<HeroDetailsProps> = ({ aboutDetails }) => {
  const { name, ...rest } = aboutDetails;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    spacing: 15,
    slidesPerView: 1,
    centered: true,
    loop: true,
    mode: "snap",
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 2,
        mode: "free-snap",
      },
      "(min-width: 1100px)": {
        slidesPerView: 3,
        // mode: "free-snap",
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  const { starships } = useAppSelector((state) => state.globalState);

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
        <div
          className="keen-slider"
          ref={sliderRef as React.RefObject<HTMLDivElement>}
        >
          {starships.map((starship, idx) => (
            <div className="keen-slider__slide" key={idx}>
              <StarshipCard starship={starship} />
            </div>
          ))}
        </div>

        {slider && (
          <div className="dots">
            {[...Array(slider.details().size).keys()].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutContent;
