import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
} from '../actions/smurfActions';

const initialState = {
  smurfs: [],
  isFetching: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isFetching: true,
      }
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          isFetching: false,
          error: ''
        }
      case FETCH_SMURFS_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        }
    default: 
      return state;
  }
}