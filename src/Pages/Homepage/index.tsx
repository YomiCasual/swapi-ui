import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Hero from "../../UI/HomepageUI/Hero";
import Loader from "../../Components/Loader/index";
import Footer from "../../Components/Footer/index";

const Home = lazy(() => import("./home"));
const StarshipsPage = lazy(() => import("./starships-page"));
const CharactersPage = lazy(() => import("./characters-page"));

function Homepage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/starships" component={StarshipsPage} />
          <Route exact path="/characters" component={CharactersPage} />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default Homepage;
