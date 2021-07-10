import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

// @components
import Typography from "../../Components/Typography";
import StarshipCard from "../../Components/StarshipCard";
import { StarshipsData } from "../../Store/GlobalReducer/types";
import { CaretLeftIcon, CaretRightIcon } from "../../Assets/Icons";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";

const StarshipsPage = () => {
  const [starships, setStarships] = useState<any>({});
  const [status, setStatus] = useState("loading");
  const [pageNum, setPageNum] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setStatus("loading");
      const newLocation: string = (location.state as string) || "";
      axios
        .get(newLocation)
        .then((data) => {
          setStarships(data.data);

          const getPageNum = newLocation.match(/[0-9]+/g);
          const pageNum = getPageNum ? getPageNum[0] : 1;

          setPageNum(pageNum);
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
      <div className="category starships">
        <div className="category__header-container">
          <Typography variant="h3" classes="category__header">
            Popular Starships
          </Typography>
        </div>
        <div className="category__body">
          {starships.results.map((starship: StarshipsData, index: number) => (
            <Fragment key={index}>
              <StarshipCard starship={starship} index={index} />
            </Fragment>
          ))}
        </div>
        <div className="pagination__button">
          <Typography variant="p">
            {parseInt(pageNum) === 1 ? 1 : (pageNum - 1) * 10} - {pageNum * 10}{" "}
            of {starships.count}{" "}
          </Typography>
          <div className="pagination__button--container">
            <Link to={{ pathname: "/starships", state: starships.previous }}>
              {starships.previous && (
                <button className="button-pag pagination__button--prev">
                  <CaretLeftIcon />
                </button>
              )}
            </Link>
            <Link to={{ pathname: "/starships", state: starships.next }}>
              {starships.next && (
                <button className="button-pag pagination__button--next ">
                  <CaretRightIcon />
                </button>
              )}
            </Link>
          </div>
        </div>
      </div>
    );
};

export default StarshipsPage;
