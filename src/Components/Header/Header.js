import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container">
        <div className="row">
            <Link to="/"><span>NBA</span>Stats</Link>
        </div>
    </div>
  );
};

export default Header;