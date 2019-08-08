import React, { Component } from "react";
import Header from "./components/header/";
import IslandList from "./components/islandList/";
import localCache from './localCache';
import request from 'superagent' ;
//import FilterControls from "./components/filterControls/";

class App extends Component {


  componentDidMount() {
    console.log('componentDidMount of IslandsApp')
    request.get('https://rocky-fjord-61678.herokuapp.com/api/islands')
        .end((error, res) => {
            if (res) {
              let islands = JSON.parse(res.text);
              localCache.populate(islands);
              console.log(islands);
              console.log('mark');
              this.setState({}) ;
          } else {
              console.log(error);
          }
        })
  }


  render() {

      console.log('render of IslandsApp')
      let listIslands = localCache.getAll()
      console.log (listIslands)

    return (
        <div className="jumbotron">
          <Header/>

          <IslandList islands={listIslands} />
        </div>
    );
  }
}

export default App;