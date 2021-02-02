import { combineReducers } from 'redux'
import { AllFilmsReducer, AllCharactersReducer } from './Search/SearchReducer'

export default combineReducers({
  movies: AllFilmsReducer,
  characters: AllCharactersReducer,
})
