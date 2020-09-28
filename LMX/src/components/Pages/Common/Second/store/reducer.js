import { fromJS } from 'immutable';
import * as constants from './constants';

const  defaultState = fromJS ({
  // NumBer: [],
  // SaTer:[]


});
export default (state = defaultState, action)=>{
  switch(action.type) {
    case constants.CHANGE_SECOND_DATA:
      return state.merge({
        // NumBer:fromJS(action.NumBer),
        // SaTer:fromJS(action.SaTer)
        // NavList:fromJS(action.NavList),
        // SpaList:fromJS(action.SpaList)
      })

    default:
      return state;
  }
}

