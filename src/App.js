import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchbox/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  updateText = () => {
    this.state();
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters
    .filter(monster => 
      monster
      .name
      .toLowerCase()
      .includes(searchField.toLocaleLowerCase()));
    return (
      <div className="App">
        <h1>Monster Inc.</h1>
        <SearchBox 
          placeholder='search monsters' 
          handleChange={ e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={ filteredMonster } />
      </div>
    );
  }
}

export default App;
