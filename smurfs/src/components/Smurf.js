import React from 'react';

function Smurf(props) {
  return (
    <div className='smurf-card'>
      <h2>{props.smurf.name}</h2>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </div>  
  );
}

export default Smurf;