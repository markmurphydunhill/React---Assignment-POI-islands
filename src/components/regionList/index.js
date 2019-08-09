import React, { Component } from "react";
import Region from "../region/";
import './regionList.css';

export default class RegionList extends Component {
    render() {
        const regionCards = this.props.regions.map(c => (
            <Region key={c.title}
                    region={c}
                    deleteHandler={this.props.deleteHandler}/>
        ));
        return (
            <div className="container-fluid contacts bg-info">
                <p>This is the region list</p>

                <div className="row">{regionCards}</div>
            </div>
        );
    }
}

/*import React, { Component } from "react";
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

                <div className="row">{islandCards}</div>
            </div>
        );
    }
}*/