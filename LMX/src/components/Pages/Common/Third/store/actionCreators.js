import axios from 'axios';
import * as constants from './constants.js';


const changeThirdData =(result)=>({
  type:constants.CHANGE_THIRD_DATA,
    // PicItem: result.PicItem,
})

export const getThird=()=>{
  return(dispatch)=>{
    axios.get('#').then((res)=>{
      const result=res.data.data;
      const action=changeThirdData(result);
      dispatch(action);
    }).catch(()=>{

    })


  }
}