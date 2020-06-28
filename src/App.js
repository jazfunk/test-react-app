import React, { Component } from "react";
import Routes from "./routes/Routes";
import Navigation from "./Navigation";

class App extends Component {
  render() {
    return (
      <div>
        <Routes />
        <Navigation />
      </div>
    );
  }
}

export default App;
