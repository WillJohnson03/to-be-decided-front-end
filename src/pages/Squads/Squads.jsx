import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Squads = (props) => {
  return ( 
    <>
      <h1>
        All Squads
      </h1>
      <Link 
        to="/createsquad"
      >
      <h2>Create New Squad</h2></Link>
    </>
   );
}
 
export default Squads;