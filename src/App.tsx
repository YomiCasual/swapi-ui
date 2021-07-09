import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

const Homepage = lazy(() => import("./Pages/Homepage"));
const About = lazy(() => import("./Pages/About"));

const Loading = () => <h3>Loading...</h3>;

function App() {
  return (
    <>
      <Suspense fallback={Loading}>
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
