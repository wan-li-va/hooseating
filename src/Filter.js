import React, { Component } from 'react';

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="Filter">
                <label margin-right="5px">Sort by </label>
                <select id="filterBy" onChange={e => this.props.handleFilterChange(e.target.value)}>
                    <option value="default">Sort By... </option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                </select>
            </div>
        )
    }
}