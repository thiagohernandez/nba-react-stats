import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Components/Head/Head';

const Page404 = () => {
  return (
    <div className="container animRight">
      <Head title="404 - Page not found" description="Page not found" />
      <h1>💩</h1>
      <h2>Shit happens! Page not found!</h2>
      <p>But its ok, you can always <Link to="/" end>start again.</Link></p>
    </div>
  );
};

export default Page404;