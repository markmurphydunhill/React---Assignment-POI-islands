import React, { Component, Fragment } from "react";
import "./island.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttons from "../../config/buttonConfig";
import api from '../../localCache';

class Island extends Component {
    state = {
        status: "",
        name: this.props.island.name,
        description: this.props.island.description,
        previousDetails: {
            name: this.props.island.name,
            description: this.props.island.description,
        }
    };
    handleEdit = () => this.setState({ status: "edit" });
    handleCancel = () => {
        let { name, description } = this.state.previousDetails;
        this.setState({ status: "", name, description });
    };
    handleNameChange = e => this.setState({ name: e.target.value });
    handleDescriptionChange = e => this.setState({ description: e.target.value });
    handleDelete = () =>  this.setState({ status : 'del'} );
    handleConfirm = (e) => {
        e.preventDefault();
        //this.props.deleteHandler(this.state.phone);
        api.delete(this.state.name);
        console.log(this.state.name);

    };
    handleSave = e => {
        e.preventDefault();

        let updatedName = this.state.name;
        let updatedDescription = this.state.description;


        if (!updatedName || !updatedDescription) {
            return;
        }
        let { name, description } = this.state;
        this.setState({ status: "", previousDetails: { name, description } });
        api.update(this.state.previousDetails.name, updatedName, updatedDescription);
    };
    render() {
        let activeButtons = buttons.normal;
        let leftButtonHandler = this.handleEdit;
        let rightButtonHandler = this.handleDelete;
        let cardColor = "bg-white";
        if (this.state.status === "edit") {
            cardColor = "bg-primary";
            activeButtons = buttons.edit;
            leftButtonHandler = this.handleSave;
            rightButtonHandler = this.handleCancel;
        }else if (this.state.status === 'del' ) {
            cardColor = "bg-warning";
            activeButtons = buttons.delete;
            leftButtonHandler = this.handleCancel;
            rightButtonHandler = this.handleConfirm;
        }
        return (
            <div className="col-sm-12">

                <div className={`card  ${cardColor}`}>
                   <div className="card-body">
                        <h5 className="card-title ">
                            {this.props.island.name}
                        </h5>
                        {this.state.status === "edit" ? (
                            <Fragment>
                                <p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.name}
                                        onChange={this.handleNameChange}
                                    />
                                </p>
                                <p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.description}
                                        onChange={this.handleDescriptionChange}
                                    />
                                </p>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <p>

                                    <span> {this.props.island.name}</span>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={["fa", "info"]} />
                                    <span> {this.props.island.description} </span>
                                </p>
                            </Fragment>
                        )}
                    </div>
                    <div className="card-footer">
                        <div
                            className="btn-group d-flex btn-group-justified"
                            role="group"
                            aria-label="..."
                        >
                            <button
                                type="button"
                                className={"btn w-100 " + activeButtons.leftButtonColor}
                                onClick={leftButtonHandler}
                            >
                                {activeButtons.leftButtonVal}
                            </button>
                            <button
                                type="button"
                                className={"btn w-100 " + activeButtons.rightButtonColor}
                                onClick={rightButtonHandler}
                            >
                                {activeButtons.rightButtonVal}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Island;


