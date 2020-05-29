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
    require('dotenv').config();
    const API = process.env.REACT_APP_KEY;
    console.log(API);

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
        this.setState({ error: "Please input a valid place or address" })
      }
    )
  }
  getStores = () => {
    require('dotenv').config();
    const API = process.env.REACT_APP_KEY;
    console.log(API);

    console.log(this.state.lat, this.state.long);
    axios.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
      + this.state.lat + "," + this.state.long +
      "&radius=" + (this.state.radius / .00062137) + "&type=restaurant&opennow&key=" + API)
      .then((response) => {
        console.log(response.data);
        this.props.setRestaurants(response.data.results);
      })
  }
  
  render() {
    return (
      <div className="Input">
        <h3>HoosEating?</h3>
        <div className="InputComponents">
          <div>
            <label>Address: </label>
            <input type="text" onChange={e => this.setState({ address: e.target.value })} />
          </div>
          <div className="radius">
            <label>Enter radius: </label>
            <input type="number" min="0" max="30" onChange={e => this.setState({ radius: e.target.value })} />
          </div>
          <div>
          <div className="radio">
          <label>
            <input type="radio" value="OnlyRestaraunts" checked={true} />
            Only Restaraunts
          </label>

          <label>
            <input type="radio" value="OnlyBars" />
            Only Bars
          </label>
        </div>
    
        <label>
          Filter by:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Price range: Low to Mid">Price range: Low to Mid</option>
            <option value="Price range: Mid to High">Price range: Mid to High</option>
          </select>
        </label>
      
      </div>
          <Button onClick={this.onClick}>Get Restaurants!</Button>
          <p>{this.state.error}</p>
        </div>
      </div>
    )
  }
}
