import { GET_FILMS, GET_CHARACTERS } from './SearchActions'
import { act } from '@testing-library/react'

let initialState = {
  movies: [],
  characters: [],
}

export const AllFilmsReducer = (state = initialState.movies, action) => {
  if (action.type === GET_FILMS) {
    console.log(action.payload,"action payload")
    return [...action.payload]
  }
  return state
}

export const AllCharactersReducer = (
  state = initialState.characters,
  action
) => {
  if (action.type === GET_CHARACTERS) {
    state.push(action.payload)
    return [...state]
  }
  return state
}
