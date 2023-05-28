import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      Monsters: [],
      searchField: ''
    };

    //this.handlechange = this.handlechange.bind(this)
  }
  //didMount will be called as soon as it render
  componentDidMount() {
    //It will fetch the data from the server api
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) //It will change the response in json format
      .then(users => this.setState({ Monsters: users })) //It will fill the array with fetched users
  }

  handlechange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { Monsters, searchField } = this.state;
    const filteredMonsters = Monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters'
          handlechange={this.handlechange}
        />
        <CardList Monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
