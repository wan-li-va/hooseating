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
            restbarPressed: "",
            pricePressed: "",
        }
    }

    handleRestaurantChange = (e) => {
        console.log(e.target.value)
        this.setState({
            RestaurantBar: e.target.value,
            restbarPressed: e.target.value
        });
        this.props.changeFilter(e.target.value, this.state.Price)
    };

    handlePriceChange = (e) => {
        this.setState({
            Price: e.target.value,
            pricePressed: e.target.value,
        });
        this.props.changeFilter(this.state.RestaurantBar, e.target.value)
    };




    render() {
        return (
            <div className="radio">

                <ToggleButtonGroup type="radio" name="restaurantBar" onClick={this.handleRestaurantChange} className="restbarChange">
                    <ToggleButton size="sm" value="restaurant" variant={(this.state.restbarPressed === "restaurant") ? "success" : "primary"}>
                        Only Restaurants
            </ToggleButton>
                    <ToggleButton size="sm" value="bar" variant={(this.state.restbarPressed === "bar") ? "success" : "primary"} >
                        Only Bars
            </ToggleButton>

                </ToggleButtonGroup >


                <ToggleButtonGroup type="radio" name="priceChange" onClick={this.handlePriceChange} >
                    <ToggleButton size="sm" value="1" variant={(this.state.pricePressed === "1") ? "success" : "primary"} >
                        Price: $
            </ToggleButton>

                    <ToggleButton size="sm" value="2" variant={(this.state.pricePressed === "2") ? "success" : "primary"} >
                        Price: $$
            </ToggleButton >

                    <ToggleButton size="sm" value="3" variant={(this.state.pricePressed === "3") ? "success" : "primary"} >
                        Price: $$$
            </ToggleButton >

                    <ToggleButton size="sm" value="4" variant={(this.state.pricePressed === "4") ? "success" : "primary"} >
                        Price Range: All
            </ ToggleButton >

                </ToggleButtonGroup >



            </div >


        )
    }
}