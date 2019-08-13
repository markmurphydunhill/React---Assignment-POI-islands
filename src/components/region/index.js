import React, { Component } from "react";
import "./region.css";
import "../../fontawesome";
import IslandList from "../islandList/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Region extends Component {
    onSelect = (event) => {
        event.preventDefault() ;
        let newRegionId = this.props.region._id ;
        console.log(newRegionId);
        this.props.handleChange(newRegionId) ;
    };

    render() {


        return (
            <div className="col-sm-16">
                <div className="card">

                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.region.title}

                        </h5>

                    </div>
                </div>
                <div className="card-footer">
                    <div
                        className="btn-group d-flex btn-group-justified"
                        role="group"
                        aria-label="..."
                    >

                        <button type="button" className={"btn btn-danger w-100"}  onClick={this.onSelect} >
                            {"Select Region"}
                        </button>
                    </div>
                </div>
            </div>




        );
    }
}

export default Region