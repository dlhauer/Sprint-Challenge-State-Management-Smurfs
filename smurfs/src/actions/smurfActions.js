import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const POST_SMURFS_START = 'POST_SMURFS_START';

export const getSmurfs = () => dispatch => {
  dispatch( {type: FETCH_SMURFS_START} );
  console.log('Hello from getSmurfs!');
  axios.get('http://localhost:3333/smurfs')
    .then( response => {
      dispatch({type: FETCH_SMURFS_SUCCESS, payload: response.data})
    })
    .catch( err => {
      dispatch({ type: FETCH_SMURFS_FAILURE, payload: err})
    })
}