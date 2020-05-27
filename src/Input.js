import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import Geocode from 'react-geocode';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      error: "",
      radius: 1,
      lat: 0,
      long: 0
    };
  }
  onClick = () => {
    Geocode.setApiKey("AIzaSyBQRbOl8Z5HnrY12zURP84C6Tdwsoy-HUI")
    // let lat, lng;
    Geocode.fromAddress(this.state.address).then(
      response => {
        let { lat, lng } = response.results[0].geometry.location;
        this.setState({
          lat: lat,
          long: lng,
        }, this.getStores)
      },
      error => {
        console.log(error);
        this.setState({ error: "Please input a valid place or address" })
      }
    )
  }
  getStores = () => {
    // this.getLocation();
    /*
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBQRbOl8Z5HnrY12zURP84C6Tdwsoy-HUI)
    */
    // 38.0293,-78.4767
    const radius = (this.state.radius) / .00062137;
    console.log(this.state.lat, this.state.long);
    axios.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
      + this.state.lat + "," + this.state.long +
      "&radius=" + 500 + "&type=restaurant&key=AIzaSyBQRbOl8Z5HnrY12zURP84C6Tdwsoy-HUI")
      .then((response) => {
        console.log(response.data);
        this.props.setRestaurants(response.data.results);
        //this.setState({ restaurants: response.data.results })
      })
  }
  render() {
    return (
      <div>
        <input type="text" onChange={e => this.setState({ address: e.target.value })} />
        <input type="number" min="0" max="30" onChange={e => this.setState({ radius: e.target.value })} />
        <Button onClick={this.onClick}>Get Restaurants!</Button>
        <p>{this.state.error}</p>
      </div>
    )
  }
}
