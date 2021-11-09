import React from "react";
import { useParams } from "react-router-dom";
import CardTeam from "./Components/CardTeam/CardTeam";

const Team = () => {
  const { id } = useParams();
  const [team, setTeam] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchTeam(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        //Get only the array
        console.log(json);
        setTeam(json);
      } catch (error) {
        setError('Error');
      } finally {
        setLoading(false);
      }
    }
    fetchTeam(`https://www.balldontlie.io/api/v1/teams/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (team === null) return null;

  return (
    <div className="container animRight">
      <div className="pageHeader">
        <div className="pageTitle">
          <h1>{team.full_name}</h1>
          <img src={`http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${team.abbreviation.toLowerCase()}.png`}/>
        </div>
      </div>
      
      
    </div>
  );
};

export default Team;
