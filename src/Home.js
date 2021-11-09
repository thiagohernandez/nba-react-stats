import React from "react";
import CardTeam from "./Components/CardTeam/CardTeam";


const Home = () => {
  const [listTeams, setListTeams] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchTeams(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        //Get only the array
        console.log(json);
        setListTeams(json.data);
        
      } catch (error) {
        setError('Error');
      } finally {
        setLoading(false);
      }
    }
    fetchTeams(`https://www.balldontlie.io/api/v1/teams`);
  }, []);


  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (listTeams === null) return null;
  return (
    <div className="container animRight">
      <div className="pageHeader">
        <div className="pageTitle">
          <h1>Teams</h1>
        </div>
      </div>
      <div className="row-grid">
        {listTeams.map((item, index) => (
          <div className="grid-item" key={index}>
            <CardTeam data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
