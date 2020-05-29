import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/Button";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import './RestaurantFilter.css';

export default class RestaurantFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            RestaurantBar: "restaurant",
            Price: "",

        }
    }

    handleRestaurantChange = (e) => {
        console.log(e.target.value)
        this.setState({
            RestaurantBar: e.target.value
        });
        this.props.changeFilter(e.target.value, this.state.Price)
    };

    handlePriceChange = (e) => {
        this.setState({
            Price: e.target.value
        });
        this.props.changeFilter(this.state.RestaurantBar, e.target.value)
    };




    render() {
        return (
            <div className="radio">

                <ToggleButtonGroup name="restaurantBar" onClick={this.handleRestaurantChange} className="restbarChange">
                    <ToggleButton size="sm" type="radio" value="restaurant" checked={this.state.RestaurantBar === "restaurant"} >
                        Only Restaurants
            </ToggleButton>
                    <ToggleButton size="sm" type="radio" value="bar" checked={this.state.RestaurantBar === "bar"} >
                        Only Bars
            </ToggleButton>

                </ToggleButtonGroup>


                <ToggleButtonGroup name="priceChange" onClick={this.handlePriceChange} >
                    <ToggleButton size="sm" type="radio" value="1" checked={this.state.Price === "1"} >
                        Price: $
            </ToggleButton>

                    <ToggleButton size="sm" type="radio" value="2" checked={this.state.Price === "2"} >
                        Price: $$
            </ToggleButton>

                    <ToggleButton size="sm" type="radio" value="3" checked={this.state.Price === "3"}>
                        Price: $$$
            </ToggleButton>

                    <ToggleButton size="sm" type="radio" value="4" checked={this.state.Price === "4"} >
                        Price Range: All
            </ToggleButton>

                </ToggleButtonGroup>



            </div >


        )
    }
}