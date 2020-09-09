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
            <div className="menuAnimation" id={this.props.favVisible ? 'favOn' : 'favOff'}>
                <div class="closeFavBtn" onClick={this.props.handleFav}>
                    <i class="fas fa-times"></i>
                </div>

                {/* {this.state.favDrinks.map((favDrink) => {
                    return(
                        <div>
                            <div className="drinkImage">
					            <img src={favDrink[0].strDrinkThumb} />
				            </div>
                        </div>
                    )
                })} */}
                
            </div>
        )
    }
}

export default FavouritesContainer