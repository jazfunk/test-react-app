import React, { Component } from "react";
import Routes from "./routes/Routes";
import Navigation from "./Navigation";
import NavigationTwo from "./NavigationTwo";
import NavigationThree from "./NavigationThree";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <NavigationTwo />
        <NavigationThree />
        <Routes />
      </div>
    );
  }
}

export default App;
