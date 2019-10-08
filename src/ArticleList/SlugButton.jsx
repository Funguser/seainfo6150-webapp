import React, { Component } from 'react';
import style from './SlugButton.module.css';

class SlugButton extends Component {
    displaySlugAlert = () => {
        alert(this.props.slug);
    };
    render() {
        return (
            <button
                onClick={this.displaySlugAlert}
                className={style.slugButton}>
                {this.props.buttonText}
            </button>
        );
    }
}

export default SlugButton;
