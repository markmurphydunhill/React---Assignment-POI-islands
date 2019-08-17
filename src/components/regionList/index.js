import React, { Component } from "react";
import Region from "../region/";
import IslandList from "../islandList/";
import './regionList.css';
import localCache from '../../localCache';

export default class RegionList extends Component {



    constructor(props) {
        super(props)
        this.state = {
            displayRegionId: '5d58056835981c0017ee92c7',
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
                    />
        ));

        return (
            <div className="container-fluid contacts bg-info">
                <h1>Please select a Regions</h1>

                <div className="row" >
                    {regionCards},
                     onChange={this.filterIslands}
                </div>



                <IslandList islands= {listIslands} />
            </div>
        )



    }
}

