import React, { useState} from 'react';
import { Link } from 'react-router-dom';

function Squads(props) {


  return ( 
    <>
      <h1>
        All Squads
      </h1>
      <Link 
        path="/createsquad"
        >
      <h2>Create New Squad</h2></Link>
    </>
   );
}
 
export default Squads;