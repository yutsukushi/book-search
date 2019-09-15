import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Nav";
import Saved from "./pages/Saved";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/save" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
