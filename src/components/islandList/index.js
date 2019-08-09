import React, { Component } from "react";
import Island from "../island/";
import './islandList.css';

export default class IslandList extends Component {
    render() {
        const islandCards = this.props.islands.map(c => (
            <Island key={c.name}
                     island={c}
                     deleteHandler={this.props.deleteHandler}/>
        ));
        return (
            <div className="container-fluid contacts bg-info">
                <p>This is the island list</p>

                <div className="row">{islandCards}</div>
            </div>
        );
    }
}