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
      ingredients: [],
      loading: false,
    }
  }

  handleNameSearch = () => {
    this.setState({
      drinks: [],
      ingredients: [],
      random: false,
      searchByName: true,
      userInput: '',
      plusButtonShown: true,
			checkButtonShown: false,
    })  
  }

  handleRandomSearch = () => {
    this.setState({
      drinks: [],
      searchByName: false,
      random: true,
      plusButtonShown: true,
      checkButtonShown: false,
      loading: true,
    })
    axios({
      url: `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
      dataType: 'json',
      method: 'GET'
    }).then((res) => {
      
      setTimeout( () => {
        this.setState({
          drinks: res.data.drinks,
          userInput: '',
          loading: false
        })
      }, 1000)

      // this.setState({
      //   drinks: res.data.drinks
      // })
    })
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      drinks: [],
      loading: true,
    })

    let urlCallValue = '';
    if (this.state.searchByName) {
      urlCallValue = 'search.php?s='
    } 
    // else if (this.state.searchByIngredient) {
    //   urlCallValue = 'filter.php?i='
    // } 
    else if (this.state.random) {
      urlCallValue = 'random.php'
    }

    axios({
      url: `https://www.thecocktaildb.com/api/json/v1/1/${urlCallValue}${this.state.userInput}`,
      dataType: 'json',
      method: 'GET'
    }).then((res) => {
      setTimeout( () => {
        this.setState({
          drinks: res.data.drinks,
          userInput: '',
          loading: false
        })
      }, 1000

      )
      // this.setState({
      //   drinks: res.data.drinks,
      //   userInput: '',
      //   loading: false
      // })
    })
  }

  refreshPage = () => {
    window.location.reload();
	}

  render () {
    return (
      <div className="app wrapper">
        <h1>Let me get you a drink</h1>
        {/* <p className="greeting">Hello there! Tonight, I am your bartender. I know lots and lots of cool cocktail recipes. All you need to do is let me know what you feel like toinght and I will come up with the drink to spice up you evening.</p> */}
        {/* <p className="greeting">Let me get you a drink!</p> */}

        <div className="menuButtons">
          <button className="menuBtn" onClick={this.handleNameSearch}>I know what I want</button>
          <button className="menuBtn" onClick={this.handleRandomSearch}>I am in the mood for anything</button>
        </div>

        {this.state.searchByName ? <NameSearch userInput={this.state.userInput} handleChange={this.handleChange} handleSubmit={this.handleSubmit} drinks={this.state.drinks} refreshPage={this.refreshPage} handleToggle={this.handleToggle} plusButtonShown={this.state.plusButtonShown} checkButtonShown={this.state.checkButtonShown} loading={this.state.loading}/> : null}
        
        {this.state.random ? <RandomSearch drinks={this.state.drinks} refreshPage={this.refreshPage} plusButtonShown={this.state.plusButtonShown} checkButtonShown={this.state.checkButtonShown} handleToggle={this.handleToggle} loading={this.state.loading}/> : null}

      </div>
    );

  }
}

export default App;
