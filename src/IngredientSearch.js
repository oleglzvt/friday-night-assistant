import React, {Component} from 'react';
import './App.css';

class IngredientSearch extends Component {
    render() {
        return(
            <div>
                 <form action="">
                     <input value={this.props.userInput} type="text" placeholder="Enter ingredient name" onChange={this.props.handleChange} />
                     <button onClick={this.props.handleSubmit}>Send</button>
                 </form>
            </div>
        )
    }
}

export default IngredientSearch