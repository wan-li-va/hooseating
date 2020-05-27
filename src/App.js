import React, { Component } from "react";
import Restaurants from "./Restaurants.js";
import Input from "./Input.js";
import AppMap from "./AppMap.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      lat: 0,
      lng: 0
    };
  }

  setRestaurants = (results) => {
    this.setState({ restaurants: results })
  }

  setLatLng = (lat, lng) => {
    this.setState({
      lat: lat,
      lng: lng
    })
  }
  render() {
    return (
      <div>
        <div className="Input">
          <Input setRestaurants={this.setRestaurants} setLatLng={this.setLatLng} />
        </div>
        <div className="data">
          <div className="Restaurants">
            <Restaurants restaurants={this.state.restaurants} />
          </div>
          <div className="Map">
            <AppMap lat={this.state.lat} lng={this.state.lng} restaurants={this.state.restaurants} />
          </div>
        </div>
      </div>
    );
  }
}
