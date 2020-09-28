import axios from "axios";
import * as constants from './constants';

const changeFifthData =(result)=>({
  type:constants.CHANGE_FIFTH_DATA,
  // NavTest: result.NavTest,
  // ListItem: result.ListItem,
  // SpaList: result.SpaList
})

export const getFifth=() =>{
  return(dispatch)=>{
    axios.get('/api/fifth.json').then((res)=>{
      const result = res.data.data;
      const action = changeFifthData(result);
      dispatch(action);
    }).catch(()=>{
    });
  }
}
