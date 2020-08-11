import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import NameSearch from './NameSearch'
import RandomSearch from './RandomSearch'

class App extends Component {

  constructor() {
    super();
    this.state = {
      searchByName: false,
      random: false,
      userInput: '',
      drinks: [],
      plusButtonShown: true,
			checkButtonShown: false,
    }
  }

  handleToggle = () => {
		this.setState({
			plusButtonShown: false,
			// plusButtonShown: this.state.plusButtonShown ? false : true,
			checkButtonShown: true,
			// checkButtonShown: this.state.checkButtonShown ? false : true,
		})
	}

  handleNameSearch = () => {
    this.setState({
      random: false,
      searchByName: true,
      userInput: ''
    })  
  }

  handleRandomSearch = () => {
    this.setState({
      searchByName: false,
      random: true,
    })
    axios({
      url: `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
      dataType: 'json',
      method: 'GET'
    }).then((res) => {
      this.setState({
        drinks: res.data.drinks
      })
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
      this.setState({
        drinks: res.data.drinks,
        userInput: ''
      })
    })
  }

  refreshPage = () => {
    window.location.reload();
	}

  render () {
    return (
      <div className="app wrapper">
        <h1>Friday Night Assistant</h1>
        {/* <p className="greeting">Hello there! Tonight, I am your bartender. I know lots and lots of cool cocktail recipes. All you need to do is let me know what you feel like toinght and I will come up with the drink to spice up you evening.</p> */}
        <p className="greeting">Let me get you a drink!</p>

        <div className="menuButtons">
          <button className="menuBtn" onClick={this.handleNameSearch}>I know what I want</button>
          <button className="menuBtn" onClick={this.handleRandomSearch}>I am in the mood for anything</button>
        </div>

        {this.state.searchByName ? <NameSearch userInput={this.state.userInput} handleChange={this.handleChange} handleSubmit={this.handleSubmit} drinks={this.state.drinks} refreshPage={this.refreshPage} handleToggle={this.handleToggle} plusButtonShown={this.state.plusButtonShown} checkButtonShown={this.state.checkButtonShown}/> : null}
        
        {this.state.random ? <RandomSearch drinks={this.state.drinks} refreshPage={this.refreshPage} plusButtonShown={this.state.plusButtonShown} checkButtonShown={this.state.checkButtonShown} handleToggle={this.handleToggle}/> : null}

      </div>
    );

  }
}

export default App;
