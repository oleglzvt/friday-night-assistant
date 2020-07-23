import React, {Component} from 'react';
import './App.css';

class NameSearch extends Component {

	render() {
		return(
			<div>
				<form action="">
						<input value={this.props.userInput} type="text" placeholder="Enter cocktail name" onChange={this.props.handleChange}/>
						<button onClick={this.props.handleSubmit}>Send</button>
				</form>

				{this.props.drinks.map(drink => {
					return (
						<div key={drink.idDrink}>
							<div className="drinkImage">
								<img src={drink.strDrinkThumb} alt={drink.strDrink}/>
							</div>
							<h2>{drink.strDrink}</h2>
							<p>You will need:</p>
							<ul>
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
					)
				})}
			</div>
		)
	}
}

export default NameSearch