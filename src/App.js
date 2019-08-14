import React, { Component } from "react";
import Header from "./components/header/";
import IslandList from "./components/islandList/";
import RegionList from "./components/regionList/";
import localCache from './localCache';
import request from 'superagent' ;
//import FilterControls from "./components/filterControls/";

class App extends Component {
   /* constructor(props) {
        super(props)
        this.state = {
            displayRegionId : '5d4fd2c8b517580017006a7c',
            displayRegionName: 'North East'
        };
    }*/

  /*  displayIslandsByRegions = (id, title) => {
        this.setState({ displayRegionId: id, displayRegionName: title });
    };*/

  componentDidMount() {
      console.log('componentDidMount of IslandsApp')

      request.get('https://rocky-fjord-61678.herokuapp.com/api/islands')
          .end((error, res) => {
              if (res) {
                  let islands = JSON.parse(res.text);
                  localCache.populate(islands);
                  console.log(islands);
                  //console.log('mark');
                 this.setState({}) ;
              } else {
                  console.log(error);
              }
          })

          request.get('https://rocky-fjord-61678.herokuapp.com/api/regions')
          .end((error, res) => {
              if (res) {
                  let regions = JSON.parse(res.text);
                  localCache.populateRegions(regions);
                  let listRegions = localCache.getAllRegions()
                  console.log('murphy');
                  console.log(listRegions);

                 this.setState({}) ;
              } else {
                  console.log(error);
              }
          })

      request.get('https://rocky-fjord-61678.herokuapp.com/api/users')
          .end((error, res) => {
              if (res) {
                  let users = JSON.parse(res.text);
                  localCache.populateRegions(users);
                  let listUsers = localCache.getAllUsers()
                  console.log('list of users');
                  console.log(listUsers);

               //   this.setState({}) ;
              } else {
                  console.log(error);
              }
          })
      //this.setState({});
  }


  render() {

      console.log('render of IslandsApp')
      /*let listIslands = localCache.getAll()
          .filter(
          (island) => {
              let islandregion = island.region
              console.log(islandregion)
              return (islandregion.search(this.state.displayRegionId) !== -1)
          }
      )*/
      //let regionName = this.state.displayRegionName
      let listRegions = localCache.getAllRegions()
     console.log (listRegions);

    return (
        <div className="jumbotron">
          <Header/>
            <div className="row">

                    <RegionList regions={listRegions}/>

            </div>
        </div>



    );
  }
}

export default App;
/*<div className="col-md-2 ">*/