import React, { Component } from "react";
import CardList from './CardList';
import Header from './Header';
import SearchApp from './SearchApp'
import { robots } from './Robots';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchField : ''
        }
    }

  onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    } 

    render() {
        const filterRobots = this.state.robots.filter(Robot => {
            return Robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className="tc pa3">
                <Header />
                <SearchApp searchChange = {this.onSearchChange} />
                <CardList robots={filterRobots}/>
            </div>
        )
    }
}

export default App;