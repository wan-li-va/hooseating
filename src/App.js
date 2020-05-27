import React, { Component } from "react";
import Restaurants from "./Restaurants.js";
import Input from "./Input.js";
import Map from "./Map.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  setRestaurants = (results) => {
    this.setState({ restaurants: results })
  }

  render() {
    return (
      <div>
        <div className="Input">
          <Input setRestaurants={this.setRestaurants} />
        </div>
        <div className="data">
          <div className="Restaurants">
            <Restaurants restaurants={this.state.restaurants} />
          </div>
          <div className="Map">
            <Map />
          </div>
        </div>
      </div>
    );
  }
}
