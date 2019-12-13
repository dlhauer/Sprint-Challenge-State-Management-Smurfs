import {useState} from 'react';

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChanges = newValue => {
    setValue(newValue);
  }
  return [value, setValue, handleChanges];
}

export default useInput; 