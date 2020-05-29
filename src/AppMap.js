import React, { Component } from "react";
import { Map, TileLayer, Popup, Marker } from "react-leaflet";
import Card from "react-bootstrap/Card";
export default class AppMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        center: [this.props.lat, this.props.lng],
        zoom: 15,
      },
    };
    require("dotenv").config();
    this.API = process.env.REACT_APP_KEY;
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
    let markers = this.props.restaurants.map((restaurant) => {
      return (
        <Marker
          position={[
            restaurant.geometry.location.lat,
            restaurant.geometry.location.lng,
          ]}
        >
          <Popup>
            <Card border="light" bg="light">
              <Card.Header>{restaurant.name}</Card.Header>
              <Card.Img
                variant="bottom"
                src={
                  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" +
                  restaurant.photos[0].photo_reference +
                  "&key=" +
                  this.API
                }
              />
            </Card>
          </Popup>
        </Marker>
      );
    });
    return (
      <Map
        viewport={this.state.viewport}
        style={{ width: "100%", height: "80vh" }}
      >
        <TileLayer
          attribution='copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
      </Map>
    );
  }
}
