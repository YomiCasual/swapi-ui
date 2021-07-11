import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

import { useAppSelector } from "../../../Store/ReduxHooks";

//@components
import Typography from "../../../Components/Typography";
import PlanetCard from "../../../Components/PlanetCard/index";

const PopularPlanets = () => {
  const { planets } = useAppSelector((state) => state.globalState);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 1,
    spacing: 15,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
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
  });

  return (
    <div className="category planets">
      <div className="category__header-container">
        <Typography variant="h3" classes="category__header">
          Popular Planets
        </Typography>
      </div>

      <div
        className="planets_container keen-slider"
        ref={sliderRef as React.RefObject<HTMLDivElement>}
      >
        {planets.map((planet, index) => (
          <div className="keen-slider__slide" key={index}>
            <PlanetCard planet={planet} />
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
  );
};

export default PopularPlanets;
