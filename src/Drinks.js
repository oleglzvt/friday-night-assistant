import React, {Component} from 'react';
import './App.css';

class Drinks extends Component {

	constructor() {
		super();
		this.state = {
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

    render() {
        return(
            <div className="drink animateBottom" key={this.props.key}>
								<div className="drinkImage">
									<img src={this.props.image} alt={this.props.title}/>
								</div>
								<div className="drinkDescription">
									<h2>{this.props.title}</h2>
									<p>You will need:</p>
									<ul className="ingredients">
                                        {(this.props.ingredients.map(ingredient => {
                                            return <li>{ingredient.ingredient ? ingredient.ingredient : null}{ingredient.quantity ? `: ${ingredient.quantity}` : null}</li>
                                        }))}
									</ul>
									<p>{this.props.recipe}</p>
								</div>
								<div className="saveButtons">
									{this.state.plusButtonShown && <button className="saveBtn" onClick={this.handleToggle}>
										<i className="fas fa-plus"></i>
									</button>}

									{this.state.checkButtonShown && <button className="saveBtn" onClick={this.handleToggle}>
										<i className="fas fa-check"></i>
									</button>}
								</div>
							</div>
        )
    }
}

export default Drinks;