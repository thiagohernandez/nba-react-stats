import React from 'react';
import styles from './Player.module.css';
import { Link } from 'react-router-dom';

const Player = ({data}) => {
    let cardImage = data.image;
    if (!cardImage) {
        cardImage = thumbnail;
    }
  return (
    <Link className={styles.cardDoc} to={`/document/${data.id}`} key={data.id}>
        <div className={styles.cardImage}>    
            <img src={cardImage} alt={data.title} loading="lazy" />    
        </div>
        <div className={styles.cardBody}>
            <h3>{data.title}</h3>
            <div className="badge">{data.type}</div>
        </div>
    </Link>
  );
}

export default Player;