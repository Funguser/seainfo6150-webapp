import React from 'react';
import styles from './ArticleImage.module.css';

const ArticleImage = (props) => {
    return <img alt={props.title} src={props.url} className={styles.image} />;
};

export default ArticleImage;
