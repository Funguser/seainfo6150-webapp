import React, { Component } from 'react';
import SlugButton from './SlugButton';
import style from './ArticleListItem.module.css';

class ArticleListItem extends Component {
    render() {
        return (
            <div>
                <h3 className={style.title}>{this.props.article.title}</h3>
                <p>{this.props.article.shortText}</p>
                <time
                    dateTime={this.props.article.pubYear}
                    className={style.time}>
                    {this.props.article.pubDate}
                </time>
                <SlugButton
                    buttonText={this.props.article.author}
                    slug={this.props.article.slug}
                />
            </div>
        );
    }
}

export default ArticleListItem;
