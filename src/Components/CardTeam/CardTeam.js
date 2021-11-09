import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CardTeam.module.css';

const CardTeam = ({data}) => {
  const urlTeam = `http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${data.abbreviation.toLowerCase()}.png`;
  return (
    <Link className={styles.cardTeam} to={`/team/${data.id}`} key={data.id}>
        <div className={styles.cardTeamBody}>
            <img src={urlTeam} alt={data.full_name}/>
            <div className="badge">{data.conference}</div>
            <h3>{data.full_name}</h3>
            <h4>{data.city}</h4>
        </div>
    </Link>
  );
}

export default CardTeam;