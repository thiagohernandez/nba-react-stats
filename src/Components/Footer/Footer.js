import React from 'react';

const Footer = () => {
  return (
    <div className="container">
        <div className="row">
            &copy; { new Date().getFullYear() } NBA Stats
        </div>
    </div>
  );
};

export default Footer;