import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import NameSearch from './components/NameSearch'
import RandomSearch from './components/RandomSearch'
import FavouritesContainer from './components/FavouritesContainer'
import firebase from './firebase'

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
      // favVisible: false,
      favDrinks: [],
      favClassName: '',
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
      }, 1000)
    })
  }

  refreshPage = () => {
    window.location.reload();
  }
  
  handleFav = () => {
    this.setState({
      // favVisible: this.state.favVisible ? false : true,
      // favVisible: true,
      favClassName: 'menuAnimationOn'
    })
  }

  handleClose = () => {
    this.setState({
      // favVisible: this.state.favVisible ? false : true,
      // favVisible: true,
      favClassName: 'menuAnimationOff'
    })
  }

  // componentDidMount() {
  //   const dbRef = firebase.database().ref();
  //   dbRef.on("value", (response) => {
  //     console.log(response.val());
  //     this.setState({
  //       favDrinks: newState,
  //     });
  //   });
  // }

  handleSave = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref();
    let savedDrinks = this.state.drinks
    dbRef.push(savedDrinks);
    // fix the issue with pushing one drink instead of all of them
  }

  render () {
    return (
      <div className="app wrapper">
        <div className="favContainer">
          <button className="favBtn" onClick={this.handleFav}><i className="fas fa-cocktail"></i></button>
        </div>
        <h1>Let me get you a drink</h1>
        <div className="menuButtons">
          <button className="menuBtn" onClick={this.handleNameSearch}>I know what I want</button>
          <button className="menuBtn" onClick={this.handleRandomSearch}>I am in the mood for anything</button>
        </div>

        {/* {this.state.favVisible ? <FavouritesContainer handleFav={this.handleFav} favVisible={this.state.favVisible} favClassName={this.state.favClassName}/> : null} */}

        <FavouritesContainer handleFav={this.handleFav} favVisible={this.state.favVisible} favDrinks={this.state.favDrinks} favClassName={this.state.favClassName} handleClose={this.handleClose}/>

        {this.state.searchByName ? 
          <NameSearch 
            userInput={this.state.userInput}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            drinks={this.state.drinks}
            refreshPage={this.refreshPage}
            handleToggle={this.handleToggle}
            plusButtonShown={this.state.plusButtonShown}
            checkButtonShown={this.state.checkButtonShown}
            loading={this.state.loading}
            handleSave={this.handleSave}
          /> : null
        }
        
        {this.state.random ? 
          <RandomSearch 
            drinks={this.state.drinks}
            refreshPage={this.refreshPage}
            plusButtonShown={this.state.plusButtonShown}
            checkButtonShown={this.state.checkButtonShown}
            handleToggle={this.handleToggle}
            loading={this.state.loading}
            handleSave={this.handleSave}
          /> : null
        }

      </div>
    );
  }
}

export default App;
