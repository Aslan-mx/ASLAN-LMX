import { fromJS } from 'immutable';
import * as constants from './constants';

const  defaultState = fromJS ({
  // TaBle:[]

});
export default (state = defaultState, action)=>{
  switch(action.type) {
    case constants.CHANGE_FIRST_DATA:
      return state.merge({
        // TaBle:fromJS(action.TaBle)
      })

    default:
      return state;
  }
}

