import React, { Component } from "react";
import Routes from "./routes/Routes";
// import Navigation from "./Navigation";
import NavigationTwo from "./NavigationTwo";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationTwo />
        <Routes />
      </div>
    );
  }
}

export default App;
