import {fromJS } from 'immutable';
import * as constants from './constants.js';

const defaultState=fromJS({
  // LastName: [],
  // PicItem:[]
});

export default (state = defaultState,action )=>{
  switch (action.type) {
    case constants.CHANGE_THIRD_DATA:
      return state.merge({
        // LastName:fromJS(action.LastName),
        // PicItem:fromJS(action.PicItem)
      })
    default:
      return state;
  }
}