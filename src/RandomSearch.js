import React, {Component} from 'react';
import './App.css';
import Drinks from "./Drinks"

class RandomSearch extends Component {
	render() {
		// if(this.props.drinks !== null) {
			return(
				<div className="animateBottom">
					{this.props.drinks.map(drink => {
						return (
							// <div className="drink" key={drink.idDrink}>
							// 	<div className="drinkImage">
							// 		<img src={drink.strDrinkThumb} alt={drink.strDrink}/>
							// 	</div>
							// 	<div className="drinkDescription">
							// 		<h2>{drink.strDrink}</h2>
							// 		<p>You will need:</p>
							// 		<ul className="ingredients">
							// 				<li>{drink.strIngredient1 ? drink.strIngredient1 : null}{drink.strMeasure1 ? `: ${drink.strMeasure1}` : null}</li>
							// 				<li>{drink.strIngredient2 ? drink.strIngredient2 : null}{drink.strMeasure2 ? `: ${drink.strMeasure2}` : null}</li>
							// 				<li>{drink.strIngredient3 ? drink.strIngredient3 : null}{drink.strMeasure3 ? `: ${drink.strMeasure3}` : null}</li>
							// 				<li>{drink.strIngredient4 ? drink.strIngredient4 : null}{drink.strMeasure4 ? `: ${drink.strMeasure4}` : null}</li>
							// 				<li>{drink.strIngredient5 ? drink.strIngredient5 : null}{drink.strMeasure5 ? `: ${drink.strMeasure5}` : null}</li>
							// 				<li>{drink.strIngredient6 ? drink.strIngredient6 : null}{drink.strMeasure6 ? `: ${drink.strMeasure6}` : null}</li>
							// 		</ul>
							// 		<p>{drink.strInstructions}</p>
							// 	</div>
							// 	<div className="saveButtons">
							// 		<button className="saveBtn">
							// 			<i className="fas fa-plus"></i>
							// 		</button>
							// 		<button className="saveBtn">
							// 			<i class="fas fa-check"></i>
							// 		</button>
							// 	</div>
							// </div>

							<Drinks  
								image={drink.strDrinkThumb} 
								title={drink.strDrink} 
								recipe={drink.strInstructions} 
								key={drink.idDrink} 
								plusButtonShown={this.props.plusButtonShown} 
								checkButtonShown={this.props.checkButtonShown} 
								handleToggle={this.props.handleToggle} 
								ingredients={[{ingredient: drink.strIngredient1, quantity: drink.strMeasure1}, {ingredient: drink.strIngredient2, quantity: drink.strMeasure2}, {ingredient: drink.strIngredient3, quantity: drink.strMeasure3}, {ingredient: drink.strIngredient4, quantity: drink.strMeasure4}, {ingredient: drink.strIngredient5, quantity: drink.strMeasure5}, {ingredient: drink.strIngredient6, quantity: drink.strMeasure6}]}
							/>
						)
					})}
				</div>
			)
		// } else {
		// 		return(
		// 			<div>
		// 				<h2 className="errorDescription">Unfortunately, I don't recognize this drink :(</h2>
		// 				<button className="menuBtn" onClick={this.props.refreshPage}>Try another one</button>
		// 			</div>
		// 		)
		// 	}
	}
}

export default RandomSearch