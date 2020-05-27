import React, { Component } from "react";
import Entry from "./Entry.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from './Filter.js';

export default class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFiltering: false,
      filterBy: "distance",
    };
  }

  handleFilterChange = filterOption => {
    ((filterOption !== "distance") ? this.setState({ isFiltering: true }) : this.setState({ isFiltering: false }))
    this.setState({ filterBy: filterOption })
  }

  sortBy = () => {
    var stores = [...this.props.restaurants];
    if (this.state.isFiltering) {
      if (this.state.filterBy === "price") {
        stores.sort(function (store1, store2) {
          return store2.price_level - store1.price_level;
        })
      }
      else {
        stores.sort(function (store1, store2) {
          return store2.rating - store1.rating;
        })
      }
    }
    else {
      stores.sort(function (store1, store2) {
        return store2.name - store1.name;
      })
    }
  }

  render() {
    let stores = this.props.restaurants.map((restaurant) => {
      return (
        <Entry className="Entry" restaurant={restaurant} />
      );
    });

    return (
      <div>
        <h4>Nearby, open restaurants: </h4>
        <div>{stores}</div>
        <div>
          <Filter handleFilterChange={this.handleFilterChange} restaurants={this.props.restaurants} />
        </div>
      </div>
    );
  }
}
