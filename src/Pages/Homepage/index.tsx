import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Hero from "../../UI/HomepageUI/Hero";

const Home = lazy(() => import("./home"));
const Starships = lazy(() => import("./starships"));

const Loading = () => <h3>Loading...</h3>;

function Homepage() {
  return (
    <div>
      <Hero />
      <Suspense fallback={Loading}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/starships" component={Starships} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default Homepage;
