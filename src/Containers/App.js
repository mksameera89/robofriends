import React, { Component } from "react";
import CardList from '../Compornants/CardList';
import Header from '../Compornants/Header';
import SearchApp from '../Compornants/SearchApp'
import { robots } from '../Compornants/Robots';
import Scroll from '../Compornants/Scroll';

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
                <Scroll>
                    <CardList robots={filterRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default App;