import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundry";
import "./MainPage.css";


class MainPage extends Component {

    componentDidMount() {
    this.props.onRequestRobots();
  }  
  filterRobots =() =>{
    return this.props.robots.filter(robot => {
    return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
  })
  }
 
  

  render() {
    const {
      onSearchChange,
      robots,
      isPending
    } = this.props;
      
    return isPending ? (
      <h1> Loading </h1>
    ) : (
      <div className="tc">
        <h1 className="f1"> RoboFriends </h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={this.filterRobots()} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
