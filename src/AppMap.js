import React, { Component } from "react";
import { Map, TileLayer, Popup } from 'react-leaflet'
export default class AppMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      zoom: 13,
      restaurants: this.props.restaurants
    };
  }

  render() {
    return (
      this.state.restaurants ?
        <Map
          center={[this.state.lat, this.state.lng]}
          zoom={this.state.zoom}
          style={{ width: '100%', height: '80vh' }}
        >
          <TileLayer
            attribution='copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
        :
        'Data is loading...'
    );
  }
}
