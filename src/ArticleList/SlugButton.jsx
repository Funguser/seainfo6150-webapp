import React, { Component } from 'react';
import style from './SlugButton.module.css';

class SlugButton extends Component {
    displaySlugAlert = () => {
        alert(this.props.slug);
    };
    render() {
        return (
            <div>
                <button
                    onClick={this.displaySlugAlert}
                    className={style.slugButton}>
                    {this.props.buttonText}
                </button>
            </div>
        );
    }
}

export default SlugButton;
