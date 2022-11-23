import React from "react";
import {robots} from "../resources/robots";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList" ;
import Scroll from "../components/Scroll" ;
import ErrorBoundary from "../components/ErrorBoundary" ;

import "./App.css";

class App extends React.Component {

    constructor() {
        super();
        this.state = {gt
            robots: [] ,
            searchItem : ''
        }
    }
    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')  // fake api gives the list of users
        .then(response =>{
            return response.json();
        })
        .then(users => {
            this.setState( {robots, users})
        })

    }
    onSearchItemChange = (event) =>{
        this.setState( {searchItem : event.target.value})
    }
    render(){
        const filteredrobos = this.state.robots.filter( (robo) =>{
            return robo.name.toLowerCase().includes(this.state.searchItem) ;
        });
        return (
            <div className="tc">
                <h1 className="pa3 f1">R O B O  F R I E N D S</h1>
                <SearchBar searchEnter={this.onSearchItemChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredrobos} />

                    </ErrorBoundary>
                    
                </Scroll>
                
            </div>
        ) ;
    }


}

export default App ;

