import React, { Component } from "react";
import CardList from '../Compornants/CardList';
import Header from '../Compornants/Header';
import SearchApp from '../Compornants/SearchApp'
//import { robots } from '../Compornants/Robots';
import Scroll from '../Compornants/Scroll';
import ErrorBoundary from "../Compornants/ErrorBoundary";


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField : ''
        }
    }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({robots:users})})
  }  

  onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    } 

    render() {
        const {robots, searchField} = this.state;
        const filterRobots = this.state.robots.filter(Robot => {
            return Robot.name.toLowerCase().includes(searchField.toLowerCase())
        });

        return !robots.length ? 
            <h1>Loading</h1>
            : (
                <div className="tc pa3">
                    <Header />
                    <SearchApp searchChange = {this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filterRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        
    }
}

export default App;