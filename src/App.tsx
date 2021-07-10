import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Loader from "./Components/Loader";

const Homepage = lazy(() => import("./Pages/Homepage"));
const About = lazy(() => import("./Pages/About"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
