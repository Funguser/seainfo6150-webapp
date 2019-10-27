import React, { Component } from 'react';
import SlugButton from './SlugButton';
import style from './ArticleListItem.module.css';
import ArticleImage from './ArticleImage';

class ArticleListItem extends Component {
    render() {
        return (
            <div className={style.article}>
                <ArticleImage
                    url={this.props.article.image._url}
                    title={this.props.article.title}
                />

                <div className={style.content}>
                    <h3 className={style.title}>{this.props.article.title}</h3>
                    <p>{this.props.article.shortText}</p>
                    <time
                        dateTime={this.props.article.pubYear}
                        className={style.time}>
                        {this.props.article.pubDate}
                    </time>
                </div>
                <div className={style.button}>
                    <SlugButton
                        buttonText={this.props.article.author}
                        slug={this.props.article.slug}
                    />
                </div>
            </div>
        );
    }
}

export default ArticleListItem;
