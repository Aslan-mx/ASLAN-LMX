import { fromJS } from 'immutable';
import * as constants from './constants';

const  defaultState = fromJS ({
  // TuList: [],
  // NavList:[],
  // SpaList:[]

});
export default (state = defaultState, action)=>{
  switch(action.type) {
    case constants.CHANGE_FOURTH_DATA:
      return state.merge({
        // TuList:fromJS(action.TuList),
        // NavList:fromJS(action.NavList),
        // SpaList:fromJS(action.SpaList)
      })

    default:
      return state;
  }
}

