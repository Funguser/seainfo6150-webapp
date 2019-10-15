import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleImage.module.css';

const ArticleImage = (props) => {
    return <img alt={props.title} src={props.url} className={styles.image} />;
};

ArticleImage.propTypes = {
    articles: PropTypes.array.isRequired
};

export default ArticleImage;
