import { combineReducers } from 'redux-immutable';

import { reducer as firstReducer}   from '../components/Pages/Common/First/store';
import { reducer as secondReducer} from '../components/Pages/Common/Second/store';
import {reducer as thirdReducer} from '../components/Pages/Common/Third/store';
import {reducer as fourthReducer} from '../components/Pages/Common/Fourth/store';
import { reducer as fifthReducer }from '../components/Pages/Common/Fifth/store';

const reducer = combineReducers({

  first:firstReducer,
  second:secondReducer,
  third:thirdReducer,
  fourth:fourthReducer,
  fifth:fifthReducer
});
export default reducer;
