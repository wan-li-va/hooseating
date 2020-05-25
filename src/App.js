import React, { Component } from "react";
import logo from "./logo.svg";
import Restaurants from "./Restaurants.js";
import Input from "./Input.js";
import Map from "./Map.js";
import "./App.css";
import Entry from "./Entry.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [
        {
          name: "SilkThai",
          rating: 5,
          price: 12.0,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div>
          <Input />
        </div>
        <div>
          <Restaurants restaurants={this.state.restaurants} />
        </div>
        <div>
          <Map />
        </div>
      </div>
    );
  }
}
