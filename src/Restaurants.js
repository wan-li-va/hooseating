import React, { Component } from "react";
import Entry from "./Entry.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

export default class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let stores = this.props.restaurants.map((restaurant) => {
      return (
        <Entry className="Entry" restaurant={restaurant} />
      );
    });

    return <div>{stores}</div>;
  }
}
