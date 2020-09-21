import React, {Component} from 'react';
import '../App.css';
import firebase from '../firebase';

class FavouritesContainer extends Component {

    constructor() {
        super();
        this.state = {
			favDrinks: [],
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();
        dbRef.on("value", (res) => {
			const newState = [];
			const data = res.val();
			for (let key in data) {
				newState.push({
					favDrink: data[key],
					key: key
				})
			}
          	this.setState({
				favDrinks: newState,
			});
        });
	}
	  
	  deleteActivity = (key) => {
        const dbRef = firebase.database().ref();
        dbRef.child(key).remove();
    };

    render() {
        return (
            <div className={`favMenu ${this.props.favClassName}`}>
                <div className="closeFavBtn" onClick={this.props.handleClose}>
                    <i className="fas fa-times"></i>
                </div>

                <h3>Saved Selection</h3>

                {this.state.favDrinks.map(({key, favDrink}) => {
                    return(
                        <div key={key} className="drink favDrink">
                            <div className="drinkImage">
					            <img src={favDrink.strDrinkThumb} />
				            </div>
							<div className="drinkDescription">
								<h2>{favDrink.strDrink}</h2>
								<p>You will need:</p>
								<ul className="ingredients">
									<li>{`${favDrink.strIngredient1 ? `${favDrink.strIngredient1}:` : null} ${favDrink.strMeasure1 ? favDrink.strMeasure1 : null}`}</li>
									<li>{`${favDrink.strIngredient2 ? `${favDrink.strIngredient2}:` : null} ${favDrink.strMeasure2 ? favDrink.strMeasure2 : null}`}</li>
									<li>{`${favDrink.strIngredient3 ? `${favDrink.strIngredient3}:` : null} ${favDrink.strMeasure3 ? favDrink.strMeasure3 : null}`}</li>
									<li>{`${favDrink.strIngredient4 ? `${favDrink.strIngredient4}:` : null} ${favDrink.strMeasure4 ? favDrink.strMeasure4 : null}`}</li>
									<li>{`${favDrink.strIngredient5 ? `${favDrink.strIngredient5}:` : null} ${favDrink.strMeasure5 ? favDrink.strMeasure5 : null}`}</li>
									<li>{`${favDrink.strIngredient6 ? `${favDrink.strIngredient6}:` : null} ${favDrink.strMeasure6 ? favDrink.strMeasure6 : null}`}</li>
								</ul>
								<p>{favDrink.strInstructions}</p>
							</div>
							<div className="saveButtons">
								<button className="saveBtn plusBtn">
									<i className="fas fa-times" onClick={() => this.deleteActivity(key)}></i>
								</button>
							</div>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

export default FavouritesContainer