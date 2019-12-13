  import React from 'react';
  import Smurf from './Smurf';

  import { connect } from 'react-redux';

  const SmurfVillage = props => {
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
    {}
  )(SmurfVillage);