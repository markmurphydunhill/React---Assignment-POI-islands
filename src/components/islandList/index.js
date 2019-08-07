import React, { Component } from "react";
import Contact from "../island/";
import './islandList.css';

export default class IslandList extends Component {
    render() {
        const islandCards = this.props.islands.map(c => (
            <Contact key={c.name}
                     island={c}
                     deleteHandler={this.props.deleteHandler}/>
        ));
        return (
            <div className="container-fluid contacts bg-info">
                <div className="row">{islandCards}</div>
            </div>
        );
    }
}