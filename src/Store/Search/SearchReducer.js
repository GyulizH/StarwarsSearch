import { GET_FILMS, GET_CHARACTERS } from './SearchActions'
import { act } from '@testing-library/react'

let initialState = {
  movies: {
    isLoading:true,
    data:[]
  },
  characters: [],
}

export const AllFilmsReducer = (state = initialState.movies, action) => {
  if (action.type === GET_FILMS) {
    return {
      isLoading:false,
      data: [...action.payload.map(movie => {
        const pathList = new URL(movie.url).pathname.split('/')
        const id = pathList[pathList.length - 2]

        return { id, ...movie }
      })]
    }
  }
  return state
}

export const AllCharactersReducer = (
  state = initialState.characters,
  action
) => {
  if (action.type === GET_CHARACTERS) {
    return [...state, action.payload]
  }
  return state
}
