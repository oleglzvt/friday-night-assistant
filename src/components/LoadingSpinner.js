import React, {Component} from 'react';
import '../App.css';

class LoadingSpinner extends Component {
    render() {
        return (
            <div className="loadingAnimation">
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}

export default LoadingSpinner