  import React, {useEffect} from 'react';
  import Smurf from './Smurf';
  import {getSmurfs} from '../actions/smurfActions';

  import { connect } from 'react-redux';

  const SmurfVillage = props => {
    
    useEffect( () => {
      props.getSmurfs();
    }, []);

    return (
      <div className='smurf-list'>
        {props.smurfs.map( (smurf, index) => (
          <Smurf key={index} smurf={smurf}/>
        ) )}
      </div>
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
  )(SmurfVillage);