//reducer
import { combineReducers } from 'redux'
import recommendReducer from '@/store/modules/discover/reducer'
import player from './modules/player/reducer'
const cReducer = combineReducers({
    recommend: recommendReducer,
    player
})
export default cReducer