import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
