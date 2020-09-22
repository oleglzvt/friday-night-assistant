import React, {Component} from 'react';
import '../App.css';
import Drinks from "./Drinks"
import LoadingSpinner from "./LoadingSpinner"

class NameSearch extends Component {

	render() {
		if (this.props.drinks !== null) {
			return(
				<div className={`animateTop ${this.props.mainPageClass}`}>
					<form>
						<input value={this.props.userInput} type="text" placeholder="Enter cocktail name" onChange={this.props.handleChange}/>
						<button className="menuBtn" onClick={this.props.handleSubmit}>Give me that drink</button>
					</form>

					{this.props.loading ? <LoadingSpinner /> : this.props.drinks.map(drink => {
						return (
							<Drinks  
								drinks = {this.props.drinks}
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
		} else {
			return(
				<div className="errorDescription">
					<h2>Unfortunately, I don't recognize this drink :(</h2>
					<button className="menuBtn" onClick={this.props.refreshPage}>Try another one</button>
				</div>
			)
		}
	}
}

export default NameSearch