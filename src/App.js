import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              state={state}
              setState={setState}
              country={country}
              setCountry={setCountry}
            />
          </Route>
          <Route path="/result">
            <Result
              firstName={firstName}
              lastName={lastName}
              state={state}
              country={country}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
