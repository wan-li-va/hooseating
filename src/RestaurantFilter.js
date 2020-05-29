import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import './RestaurantFilter.css';

export default class RestaurantFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            RestaurantBar: "restaurant",
            Price: "",

        }
    }

    handleRestarauntChange = changeEvent => {
        this.setState({
            RestaurantBar: changeEvent.target.value
        });
        this.props.changeFilter(changeEvent.target.value, this.state.Price)
    };

    handlePriceChange = changeEvent => {
        this.setState({
            Price: changeEvent.target.value
        });
        this.props.changeFilter(this.state.RestaurantBar, changeEvent.target.value)
    };

    render() {
        return (
            <div className="RestaurantFilter">
                <div className="RestaurantBar">
                    <div className="radio">
                        <label>
                            <input type="radio" value="restaurant" checked={this.state.RestaurantBar === "restaurant"}
                                onChange={this.handleRestarauntChange} />
            Only Restaurants
          </label>
                        <label>
                            <input type="radio" value="bar" checked={this.state.RestaurantBar === "bar"}
                                onChange={this.handleRestarauntChange} />
            Only Bars
          </label>
                    </div>
                    <div className="priceOption">
                        <label>
                            <input type="radio" value="1" checked={this.state.Price === "1"}
                                onChange={this.handlePriceChange} />
            Price range: Low
          </label>
                        <label>
                            <input type="radio" value="2" checked={this.state.Price === "2"}
                                onChange={this.handlePriceChange} />
          Price range: Mid
          </label>
                        <label>
                            <input type="radio" value="3" checked={this.state.Price === "3"}
                                onChange={this.handlePriceChange} />
          Price range: High
          </label>
                        <label>
                            <input type="radio" value="4" checked={this.state.Price === "4"}
                                onChange={this.handlePriceChange} />
          Price range: All
          </label>
                    </div>

                </div>
            </div>
        )
    }
}