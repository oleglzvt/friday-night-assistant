import React, {Component} from 'react';
import './App.css';

class RandomSearch extends Component {
    render() {
        if(this.props.drinks !== null) {
            return(
                <div className="animateBottom">
                    {this.props.drinks.map(drink => {
                        return (
                            <div className="drink" key={drink.idDrink}>
                                <div className="drinkImage">
                                    <img src={drink.strDrinkThumb} alt={drink.strDrink}/>
                                </div>
                                <div className="drinkDescription">
                                    <h2>{drink.strDrink}</h2>
                                    <p>You will need:</p>
                                    <ul className="ingredients">
                                        <li>{drink.strIngredient1 ? drink.strIngredient1 : null}: {drink.strMeasure1}</li>
                                        <li>{drink.strIngredient2 ? drink.strIngredient2 : null}: {drink.strMeasure2}</li>
                                        <li>{drink.strIngredient3 ? drink.strIngredient3 : null}: {drink.strMeasure3}</li>
                                        <li>{drink.strIngredient4 ? drink.strIngredient4 : null}: {drink.strMeasure4}</li>
                                        <li>{drink.strIngredient5 ? drink.strIngredient5 : null}: {drink.strMeasure5}</li>
                                        <li>{drink.strIngredient6 ? drink.strIngredient6 : null}: {drink.strMeasure6}</li>
                                        {/* <li>{drink.strIngredient1}</li>
                                        <li>{drink.strIngredient2}</li>
                                        <li>{drink.strIngredient3}</li>
                                        <li>{drink.strIngredient4}</li>
                                        <li>{drink.strIngredient5}</li>
                                        <li>{drink.strIngredient6}</li> */}
                                    </ul>
                                    <p>{drink.strInstructions}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return(
				<div>
					<h2 className="errorDescription">Unfortunately, I don't recognize this drink :(</h2>
					<button onClick={this.props.refreshPage}>Try another one</button>
				</div>
			)
        }
    }
}

export default RandomSearch