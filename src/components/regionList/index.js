import React, { Component } from "react";
import Region from "../region/";
import IslandList from "../islandList/";
import './regionList.css';
import localCache from '../../localCache';

export default class RegionList extends Component {



    constructor(props) {
        super(props)
        let region1 = this.props.regions;
        //let region1id = region1._id;
        console.log('constructor');
        console.log(region1);
        this.state = {
            displayRegionId: '5d52e373716d900017687cca',
            displayRegionName: 'North East'
        }}

    filterIslands = (text) => this.setState({displayRegionId : text})
    render() {

        console.log('RegionList component');
        let listIslands = localCache.getAll()
            .filter(
                (island) => {
                    let islandregion = island.region

                    return (islandregion.search(this.state.displayRegionId) !== -1)
                }
            )
        console.log(listIslands);

        const regionCards = this.props.regions.map(c => (
            <Region key={c.title}
                    region={c}
                    deleteHandler={this.props.deleteHandler}/>
        ));

        return (
            <div className="container-fluid contacts bg-info">
                <p>These are the islands of  the region</p>

                <div className="row" >
                    {regionCards}
                     handleChange={this.filterIslands}
                </div>

                <IslandList islands= {listIslands} />
            </div>
        )



    }
}

