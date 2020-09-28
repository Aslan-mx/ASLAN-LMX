import { fromJS } from 'immutable';
import * as constants from './constants';

const  defaultState = fromJS ({
  // NavTest:[],
  // ListItem:[]

});
export default (state = defaultState, action)=>{
  switch(action.type) {
    case constants.CHANGE_FIFTH_DATA:
      return state.merge({
        // NavTest:fromJS(action.NavTest),
        // ListItem:fromJS(action.ListItem)
      })

    default:
      return state;
  }
}

