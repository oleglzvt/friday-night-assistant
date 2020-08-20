import React, {Component} from 'react';
import '../App.css';

class FavouritesContainer extends Component {
    render() {
        return (
            <div className="menuAnimation" id={this.props.favVisible ? 'favOn' : 'favOff'}>
                <div class="closeFavBtn">
                    <i class="fas fa-times" onClick={this.props.handleFav}></i>
                </div>
            </div>
        )
    }
}

export default FavouritesContainer