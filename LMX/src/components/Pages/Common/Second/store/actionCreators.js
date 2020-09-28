import axios from "axios";
import * as constants from './constants';

const changeSecondData =(result)=>({
  type:constants.CHANGE_SECOND_DATA,
  // NumBer: result.NumBer,
  // SaTer: result.SaTer,
  // SpaList: result.SpaList
})

export const getSecond=() =>{
  return(dispatch)=>{
    axios.get('#').then((res)=>{
      const result = res.data.data;
      const action = changeSecondData(result);
      dispatch(action);
    }).catch(()=>{
    });
  }
}
