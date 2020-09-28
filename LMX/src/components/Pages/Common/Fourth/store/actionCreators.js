// ajax数据传送

import axios from "axios";
import * as constants from './constants';

const changeFourthData =(result)=>({
  type:constants.CHANGE_FOURTH_DATA,
  // TuList: result.TuList,

})

export const getFourth=() =>{
  return(dispatch)=>{
    axios.get('#').then((res)=>{
      const result = res.data.data;
      const action = changeFourthData(result);
      dispatch(action);
    }).catch(()=>{
    });
  }
}
