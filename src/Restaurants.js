import React, { Component } from "react";
import Entry from "./Entry.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from './Filter.js';

export default class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFiltering: false,
      filterBy: "default",
    };
  }

  handleFilterChange = filterOption => {
    ((filterOption !== "default") ? this.setState({ isFiltering: true }) : this.setState({ isFiltering: false }))
    console.log(filterOption)
    console.log(filterOption !== "default")
    console.log(this.state.isFiltering)
    this.setState({ filterBy: filterOption })
  }

  sortBy = () => {
    var stores = [...this.props.restaurants];
    if (this.state.isFiltering) {
      if (this.state.filterBy === "price") {
        return (
          stores.sort(function (store1, store2) {
            var price1 = store1.price_level;
            var price2 = store2.price_level;
            if (store1.price_level === undefined) { price1 = 0 }
            if (store2.price_level === undefined) { price2 = 0 }
            return price2 - price1;
          })
        )
      }
      else {
        return (
          stores.sort(function (store1, store2) {
            return store2.rating - store1.rating;
          }))
      }
    }
    else {
      return (
        stores.sort(function (store1, store2) {
          return store2.distance - store1.distance;
        }))
    }
  }

  render() {
    let sortedStores = this.sortBy();
    let stores = sortedStores.map((restaurant) => {
      return (
        <Entry className="Entry" 
        restaurant={restaurant} 
        lat={this.props.lat} 
        lng={this.props.lng} 
        setDistance={this.props.setDistance} />
      );
    });

    return (
      <div>
        <h4>Nearby, open restaurants: </h4>
        <div className="cardsList">{stores}</div>
        <div>
          <Filter handleFilterChange={this.handleFilterChange} restaurants={this.props.restaurants} />
        </div>
      </div>
    );
  }
}
