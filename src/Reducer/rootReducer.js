import { combineReducers } from 'redux'
import NewsReducer from './NewsReducer'
 import IndicatorReducer from './Indicator'


const rootReducer = combineReducers({
   AllPEGNEWS: NewsReducer,
   inDicate: IndicatorReducer
})

export default rootReducer