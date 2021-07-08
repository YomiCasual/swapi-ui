import Card from "../../Components/Card";
import Typography from "../../Components/Typography/index";

const PopularStarships = () => {
  return (
    <div className="category starships">
      <div className="category__header-container">
        <Typography variant="h3" classes="category__header">
          Popular Starships
        </Typography>
      </div>
      <div className="category__body">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <button className="button view__more ">View More</button>
      </div>
    </div>
  );
};

export default PopularStarships;
