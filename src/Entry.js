import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import * as geolib from 'geolib';
import './Entry.css';

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: null,
      showAddress: false,
      address: "",
    };
  }

  componentDidMount = () => {
    var dist = geolib.getDistance({
      latitude: this.props.restaurant.geometry.location.lat,
      longitude: this.props.restaurant.geometry.location.lng,
    },
      {
        latitude: this.props.lat,
        longitude: this.props.lng,
      }) * 0.000621371;

    dist = Math.round((dist + Number.EPSILON) * 100) / 100;
    this.setState({ distance: dist })

    const entry = {
      name: this.props.restaurant.name,
      geometry: this.props.restaurant.geometry,
      opening_hours: this.props.restaurant.opening_hours,
      photos: this.props.restaurant.photos,
      price_level: this.props.restaurant.price_level,
      rating: this.props.restaurant.rating,
      types: this.props.restaurant.types,
      user_ratings_total: this.props.restaurant.user_ratings_total,
      vicinity: this.props.restaurant.vicinity,
      distance: dist
    }
    this.props.setDistance(entry);
  }

  showAddress = () => {
    (this.state.showAddress) ?
      this.setState({ address: "", showAddress: false, }) :
      this.setState({ address: this.props.restaurant.vicinity, showAddress: true, })
  }

  render() {
    return (
      <div>
        <div className="Entry">

          <Card className="Card">
            <Card.Body>
              <Card.Text>
                <em>Name: {this.props.restaurant.name} </em> < br />
                <em>Rating: {this.props.restaurant.rating}</em> < br />
                <em>Number of ratings: {this.props.restaurant.user_ratings_total}</em> < br />
                {(this.props.restaurant.price_level === 1) ?
                  <em>Price: $</em>
                  :
                  ((this.props.restaurant.price_level === 2) ?
                    <em>Price: $$</em>
                    :
                    ((this.props.restaurant.price_level === 3) ?
                      <em>Price: $$$</em>
                      :
                      <em>Price: N/A</em>
                    )
                  )
                } < br />
                <em>Distance: {this.state.distance} miles away</em> < br />
                <Button onClick={this.showAddress} >Show/Hide Address</Button> < br />
                <em>{this.state.address}</em>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
