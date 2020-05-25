import React, { Component } from "react";
import Entry from "./Entry.js";
import Card from "react-bootstrap/Card";

export default class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let stores = this.props.restaurants.map((restaurant) => {
      return <Entry restaurant={restaurant} />;
    });

    return <div>{stores}</div>;
  }
}
