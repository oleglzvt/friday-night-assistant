import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import NameSearch from './NameSearch'
// import IngredientSearch from './IngredientSearch'
import RandomSearch from './RandomSearch'

class App extends Component {

  constructor() {
    super();
    this.state = {
      searchByName: false,
      // searchByIngredient: false,
      random: false,
      userInput: '',
      drinks: []
    }
  }

  handleNameSearch = () => {
    this.setState({
      searchByName: true,
      // searchByIngredient: false,
      random: false,
      userInput: ''
    })  
  }
  // handleIngredientSearch = () => {
  //   this.setState({
  //     searchByName: false,
  //     searchByIngredient: true,
  //     random: false,
  //   }) 
  // }
  handleRandomSearch = () => {
    this.setState({
      searchByName: false,
      // searchByIngredient: false,
      random: true,
    })
    axios({
      url: `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
      dataType: 'json',
      method: 'GET'
    }).then((res) => {
      // console.log(res);
      this.setState({
        drinks: res.data.drinks
      })
      console.log(this.state.drinks);
    })
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let urlCallValue = '';
    if (this.state.searchByName) {
      urlCallValue = 'search.php?s='
    } else if (this.state.searchByIngredient) {
      urlCallValue = 'filter.php?i='
    } else if (this.state.random) {
      urlCallValue = 'random.php'
    }

    axios({
      url: `https://www.thecocktaildb.com/api/json/v1/1/${urlCallValue}${this.state.userInput}`,
      dataType: 'json',
      method: 'GET'
    }).then((res) => {
      // console.log(res);
      this.setState({
        drinks: res.data.drinks,
        userInput: ''
      })
      console.log(this.state.drinks);
    })
  }

  render () {
    return (
      <div className="app wrapper">
        <h1>Friday Night Assistant</h1>
        <p>Hello there! My name is Sexy Ricardo and I will be your bartender for tonight. I know lots and lots of cool cocktail recipes. All you need to do is let me know what you feel like toinght and I will come up with the drink to spice up you evening.</p>

        <button onClick={this.handleNameSearch}>I know what I want</button>
        {/* <button onClick={this.handleIngredientSearch}>Something with specific ingredient</button> */}
        <button onClick={this.handleRandomSearch}>I am in the mood for anything</button>

        {this.state.searchByName ? <NameSearch userInput={this.state.userInput} handleChange={this.handleChange} handleSubmit={this.handleSubmit} drinks={this.state.drinks} /> : null}

        {/* {this.state.searchByIngredient ? <IngredientSearch userInput={this.state.userInput} handleChange={this.handleChange} handleSubmit={this.handleSubmit} /> : null} */}
        
        {this.state.random ? <RandomSearch drinks={this.state.drinks} /> : null}

      </div>
    );

  }
}

export default App;
