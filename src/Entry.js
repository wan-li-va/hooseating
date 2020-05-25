import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <p>Name: {this.props.restaurant.name} </p>
        <p>Rating: {this.props.restaurant.rating} </p>
        <p>Price:{this.props.restaurant.price} </p> */}

        <Card>
          <Card.body>
            <Card.Text>
              <p>Name: {this.props.restaurant.name} </p>
              <p>Rating: {this.props.restaurant.rating} </p>
              <p>Price:{this.props.restaurant.price}</p>
            </Card.Text>
          </Card.body>
        </Card>
      </div>
    );
  }
}
