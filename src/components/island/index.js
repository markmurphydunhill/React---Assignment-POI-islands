import React, { Component } from "react";
import "./island.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Island extends Component {
    render() {
        return (
            <div className="col-sm-14">
                <div className="card">

                    <div className="card-body">
                        <h5 className="card-title ">
                            {this.props.island.name}
                        </h5>
                        <p>
                             {
                                this.props.island.description
                                }
                        </p>
                        <p key="email">
                            <FontAwesomeIcon icon={["fas", "envelope"]} />
                            <span> {this.props.island.name}</span>
                        </p>
                        <p key="phone">
                            <FontAwesomeIcon icon={["fas", "phone"]} />
                            <span> {this.props.island.name} </span>
                        </p>
                    </div>
                    <div className="card-footer">
                        <div
                            className="btn-group d-flex btn-group-justified"
                            role="group"
                            aria-label="..."
                        >
                            <button type="button" className={"btn btn-default w-100"}>
                                {" Edit "}
                            </button>
                            <button type="button" className={"btn btn-danger w-100"}>
                                {"Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Island