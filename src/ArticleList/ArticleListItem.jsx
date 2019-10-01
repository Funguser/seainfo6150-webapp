import React, { Component } from 'react';

class ArticleListItem extends Component {
    displaySlug = () => {
        alert(this.props.article.slug);
    };

    render() {
        return (
            <div>
                <h3>{this.props.article.title}</h3>
                <p>{this.props.article.shortText}</p>
                <time dateTime={this.props.article.pubYear}>
                    {this.props.article.pubDate}
                </time>
                <button onClick={this.displaySlug}>Show article slug</button>
            </div>
        );
    }
}

export default ArticleListItem;
