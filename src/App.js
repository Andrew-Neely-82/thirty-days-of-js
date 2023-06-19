import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer, Sidebar } from "./components/index.js";
import { Home, DayOne, DayTwo } from "./pages/export.js";
import React from "react";
import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <Sidebar />
        <div className="App_content">
          <Router>
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/day1"} component={DayOne} />
              <Route exact path={"/day2"} component={DayTwo} />
              {/* <Route exact path={"/day3"} component={DayTwo} /> */}
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
