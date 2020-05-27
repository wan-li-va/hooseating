import React, { Component } from "react";
import Restaurants from "./Restaurants.js";
import Input from "./Input.js";
import Map from "./Map.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Places from "./Places.json";
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount = () => {
    // axios = require("axios");

    axios.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.0293,-78.4767&radius=500&type=restaurant&key=AIzaSyBQRbOl8Z5HnrY12zURP84C6Tdwsoy-HUI")
      .then((response) => {
        console.log(response.data);
        this.setState({ restaurants: response.data.results })
      })
  }

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
