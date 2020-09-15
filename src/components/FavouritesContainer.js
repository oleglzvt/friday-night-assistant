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
        dbRef.on("value", (response) => {
          console.log(response.val());
          this.setState({
            favDrinks: response.val(),
          });
        });
      }

    render() {
        return (
            <div className={`favMenu ${this.props.favClassName}`}>
                <div className="closeFavBtn" onClick={this.props.handleClose}>
                    <i className="fas fa-times"></i>
                </div>

                {/* {this.state.favDrinks.map((favDrink) => {
                    return(
                        <div>
                            <div className="drinkImage">
					            <img src={favDrink.strDrinkThumb} />
				            </div>
                        </div>
                    )
                })} */}
                
            </div>
        )
    }
}

export default FavouritesContainer