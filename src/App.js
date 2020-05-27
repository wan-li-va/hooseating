import React, { Component } from "react";
import logo from "./logo.svg";
import Restaurants from "./Restaurants.js";
import Input from "./Input.js";
import Map from "./Map.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Places from "./Places.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount = () => {
    const axios = require("axios").default;

    axios
      .get(
        "https://cors-anywhere.herokuapp.com/maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.0293,-78.4767&radius=30&type=restaurant&key=AIzaSyBQRbOl8Z5HnrY12zURP84C6Tdwsoy-HUI"
      )
      .then(function (response) {
        console.log(response);
      });

    // var latitude = 38.0293;
    // var longitude = -78.4767;

    // const url =
    //   "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" +
    //   "location=" +
    //   latitude +
    //   "," +
    //   longitude +
    //   "&radius=30&type=restaurant&key=AIzaSyBQRbOl8Z5HnrY12zURP84C6Tdwsoy-HUI";

    // fetch(url)
    //   .then((response) => response.json())
    //   .then((response) =>
    //     this.setState({
    //       restaurants: response.results,
    //     })
    //   );
  };

  render() {
    return (
      <div>
        <div className="Input">
          <Input />
        </div>
        <div className="Restaurants">
          <Restaurants restaurants={this.state.restaurants} />
        </div>
        <div className="Map">
          <Map />
        </div>
      </div>
    );
  }
}
