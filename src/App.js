import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer, Sidebar } from "./components/index.js";
import { DayOne } from "./pages/export.js";
import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className="App_content">
        <Router>
          <Switch>
            <Route exact path={"/"} component={""} />
            <Route exact path={"/day1"} component={DayOne} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
