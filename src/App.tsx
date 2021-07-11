import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

const Homepage = lazy(() => import("./Pages/Homepage/"));
const About = lazy(() => import("./Pages/About"));
const StarshipsPage = lazy(() => import("./Pages/StarshipsPage"));
const CharactersPage = lazy(() => import("./Pages/CharactersPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/starships" component={StarshipsPage} />
          <Route exact path="/characters" component={CharactersPage} />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
