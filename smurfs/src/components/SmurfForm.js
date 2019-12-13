import React from 'react';
import useInput from '../hooks/useInput';
import {getSmurfs, addSmurf} from '../actions/smurfActions';
import { connect } from 'react-redux';

function SmurfForm(props) {
  const [name, setName, handleNameChange] = useInput('');
  const [age, setAge, handleAgeChange] = useInput('');
  const [height, setHeight, handleHeightChange] = useInput('');

  const handleSubmit = e => {
    // e.preventDefault();
    // console.log('hello from handleSubmit!')
    addSmurf(name, age, height);
    // props.getSmurfs();
    setName('');
    setAge('');
    setHeight('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Smurf name'
        type='text'
        value={name}
        onChange={e => handleNameChange(e.target.value)}
      />
      <input 
        placeholder='age'
        type='number'
        value={age}
        onChange={e => handleAgeChange(e.target.value)}
      />
      <input 
        placeholder='height'
        type='text'
        value={height}
        onChange={e => handleHeightChange(e.target.value)}
      />
      <button>Add your Smurf!</button>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
  }
}

export default connect(
  mapStateToProps,
  {getSmurfs}
)(SmurfForm);