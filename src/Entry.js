import React, { Component } from "react";
// import Card from "react-bootstrap/Card";

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="Entry">
          <p>Name: {this.props.restaurant.name} </p>
          <p>Rating: {this.props.restaurant.rating}</p>
          {(this.props.restaurant.price_level === 1) ?
            <p>Price: $</p>
            :
            ((this.props.restaurant.price_level === 2) ?
              <p>Price: $$</p>
              :
              <p>Price: $$$</p>
            )
          }
        </div>
      </div>
    );
  }
}
