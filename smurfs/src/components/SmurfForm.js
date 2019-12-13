import React from 'react';
import useInput from '../hooks/useInput';

function SmurfForm(props) {
  const [name, setName, handleNameChange] = useInput('');
  const [age, setAge, handleAgeChange] = useInput('');
  const [height, setHeight, handleHeightChange] = useInput('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('hello from handleSubmit!')
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

export default SmurfForm;