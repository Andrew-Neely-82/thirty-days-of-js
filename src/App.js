import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, DayOne, DayTwo, DayThree } from "./pages/export.js";
import { Navbar, Footer, Sidebar } from "./components/index.js";
import React from "react";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Sidebar />
        <div className="App_content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/day1" component={DayOne} />
            <Route exact path="/day2" component={DayTwo} />
            <Route exact path="/day3" component={DayThree} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
