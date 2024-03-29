import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

// @components
import { CaretLeftIcon, CaretRightIcon } from "../../Assets/Icons";
import Typography from "../../Components/Typography";
import CharacterCard from "../../Components/CharacterCard";
import Loader from "../../Components/Loader/";
import Error from "../../Components/Error";
import { CharacterData } from "../../Store/GlobalReducer/types";
import Hero from "../../UI/HomepageUI/Hero/";

const CharactersPage = () => {
  const [characters, setcharacters] = useState<any>({});
  const [filteredCharacters, setFilteredCharacters] = useState<any>(characters);
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
          setcharacters(data.data);
          setFilteredCharacters(data.data);
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

  const handleGenderChange = (e: any) => {
    const { value } = e.target;

    if (value === "all") {
      setFilteredCharacters(characters);
    } else {
      const newCharacters = characters.results.filter(
        (character: CharacterData) => character.gender.toLowerCase() === value
      );
      let editedCharacters = { ...characters, results: newCharacters };
      setFilteredCharacters(editedCharacters);
    }
  };

  const filterList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.trim().length > 0) {
      const newCharacters = characters.results.filter(
        (character: CharacterData) =>
          character.name.toLowerCase().includes(value.toLowerCase())
      );
      let editedCharacters = { ...characters, results: newCharacters };
      setFilteredCharacters(editedCharacters);
    } else {
      setFilteredCharacters(characters);
    }
  };

  if (status === "loading") return <Loader />;
  else if (status === "failed") return <Error />;
  else
    return (
      <>
        <Hero filterList={filterList} />
        <div className="category characters">
          <div className="category__header-container">
            <Typography variant="h3" classes="category__header">
              Starwars characters
            </Typography>
          </div>
          <div className="filter__container">
            <div className="filter__group ">
              <label>filter</label>

              <div className="select__wrapper">
                <select
                  onChange={handleGenderChange}
                  name="gender"
                  defaultValue="Gender"
                >
                  <option disabled>Gender</option>
                  <option value="all">All</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="filter__group ">
              <label>View</label>
              <div className="select__wrapper">
                <select name="gender" defaultValue="View">
                  <option disabled>View</option>
                  <option value="all">Grid</option>
                  <option value="male">Column</option>
                </select>
              </div>
            </div>
          </div>
          <div className="category__body">
            {filteredCharacters.results.map(
              (character: CharacterData, index: number) => (
                <Fragment key={index}>
                  <CharacterCard character={character} />
                </Fragment>
              )
            )}
          </div>
          <div className="pagination__button">
            <Typography variant="p">
              {parseInt(pageNum) === 1 ? 1 : (pageNum - 1) * 10} -{" "}
              {pageNum * 10} of {characters.count}{" "}
            </Typography>
            <div className="pagination__button--container">
              <Link
                to={{ pathname: "/characters", state: characters.previous }}
              >
                {characters.previous && (
                  <button className="button-pag pagination__button--prev">
                    <CaretLeftIcon />
                  </button>
                )}
              </Link>
              <Link to={{ pathname: "/characters", state: characters.next }}>
                {characters.next && (
                  <button className="button-pag pagination__button--next ">
                    <CaretRightIcon />
                  </button>
                )}
              </Link>
            </div>
          </div>
        </div>
      </>
    );
};

export default CharactersPage;
