import React, { Component } from "react";
import { Map, TileLayer, Popup } from "react-leaflet";
export default class AppMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        center: [this.props.lat, this.props.lng],
        zoom: 15,
      },
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lat !== this.props.lat || prevProps.lng !== this.props.lng) {
      console.log("Component did update");
      console.log(this.props.lat, this.props);
      this.setState({
        viewport: { center: [this.props.lat, this.props.lng], zoom: 15 },
      });
    }
  }
  render() {
    return (
      <Map
        viewport={this.state.viewport}
        style={{ width: "100%", height: "80vh" }}
      >
        <TileLayer
          attribution='copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    );
  }
}
