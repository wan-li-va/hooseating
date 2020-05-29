import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import axios from 'axios';
import Geocode from 'react-geocode';
import RestaurantFilter from './RestaurantFilter.js';
import "./Input.css";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      radius: 1,
      lat: 0,
      long: 0,
      RestaurantBar: "restaurant",
      price: "",
    };
  }
  onClick = () => {
    require('dotenv').config();
    const API = process.env.REACT_APP_KEY;

    Geocode.setApiKey(API)
    Geocode.fromAddress(this.state.address).then(
      response => {
        let { lat, lng } = response.results[0].geometry.location;
        this.setState({
          lat: lat,
          long: lng,
        }, () => {
          this.getStores();
          this.props.setLatLng(this.state.lat, this.state.long);
        })
      },

      error => {
        console.log(error);
        alert("Please input a valid place or address");
      }
    )
  }
  getStores = () => {
    require('dotenv').config();
    const API = process.env.REACT_APP_KEY;
    axios.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
      + this.state.lat + "," + this.state.long +
      "&radius=" + (this.state.radius / .00062137) + "&type=" + this.state.RestaurantBar + this.state.price + "&opennow&key=" + API)
      .then((response) => {
        console.log(response.data);
        this.props.setRestaurants(response.data.results);
      })
  }

  changeFilter = (restaurantOption, priceOption) => {
    (priceOption === "4") ? this.setState({ RestaurantBar: restaurantOption, price: "" }) :
      this.setState({
        RestaurantBar: restaurantOption,
        price: "&minprice=" + priceOption + "&maxprice=" + priceOption,
      })
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" className="navBar">
        <Navbar.Brand className="logo">HoosEating?</Navbar.Brand>
        <label className="navbarLabel">Address: </label>
        <input
          type="text"
          onChange={(e) => this.setState({ address: e.target.value })}
        />
        <label className="navbarLabel">Enter radius: </label>
        <input
          className="radiusInput"
          type="number"
          min="0"
          max="30"
          onChange={(e) => this.setState({ radius: e.target.value })}
        />
        <RestaurantFilter changeFilter={this.changeFilter} />
        <Button size="lg" className="getPlaces" variant="success" onClick={this.onClick}>Get Places!</Button>
      </Navbar>
    )
  }
}
