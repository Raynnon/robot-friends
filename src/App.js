import React, { Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    render() {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <Searchbox />
                <CardList robots={this.state.robots} />
            </div>
        );
    }
}

export default App;