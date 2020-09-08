import React, {Component} from 'react';
import '../App.css';
import Drinks from "./Drinks"
import LoadingSpinner from "./LoadingSpinner"

class RandomSearch extends Component {

	render() {
		return(
			<div>
				{this.props.loading ? <LoadingSpinner /> : this.props.drinks.map(drink => {
					return (
						<Drinks className="animateBottom"
							image={drink.strDrinkThumb} 
							title={drink.strDrink} 
							recipe={drink.strInstructions} 
							key={drink.idDrink} 
							plusButtonShown={this.props.plusButtonShown} 
							checkButtonShown={this.props.checkButtonShown} 
							handleToggle={this.props.handleToggle}
							handleSave={this.props.handleSave}
							ingredients={[{ingredient: drink.strIngredient1, quantity: drink.strMeasure1}, {ingredient: drink.strIngredient2, quantity: drink.strMeasure2}, {ingredient: drink.strIngredient3, quantity: drink.strMeasure3}, {ingredient: drink.strIngredient4, quantity: drink.strMeasure4}, {ingredient: drink.strIngredient5, quantity: drink.strMeasure5}, {ingredient: drink.strIngredient6, quantity: drink.strMeasure6}]}
						/>
					)
				})}
			</div>
		)
	}
}

export default RandomSearch