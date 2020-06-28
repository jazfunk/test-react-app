import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navBarToggle"
            aria-controls="navBarToggle"
            // aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navBarToggle">
            <a class="navbar-brand" href="/">
              Navigation
            </a>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Showcase
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Random
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
