import React, {Component} from 'react';
import '../App.css';

class FavouritesContainer extends Component {

    render() {
        return (
            <div className="menuAnimation" id={this.props.favVisible ? 'favOn' : 'favOff'}>
                <div class="closeFavBtn" onClick={this.props.handleFav}>
                    <i class="fas fa-times"></i>
                </div>

                
            </div>
        )
    }
}

export default FavouritesContainer