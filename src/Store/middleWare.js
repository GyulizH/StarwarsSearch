import {
  GET_FILMS_FROM_API,
  GET_CHARACTERS_FROM_API,
  getFilms,
  getCharacters,
} from './Search/SearchActions'

import { fetchMovies, fetchCharacters } from '../Utils'

const apiMiddleWare = ({ dispatch }) => (next) => (action) => {
  if (action.type === GET_FILMS_FROM_API) {
    fetchMovies().then((data) => {
      dispatch(getFilms(data))
    })
  } else if (action.type === GET_CHARACTERS_FROM_API) {
    let queries = action.queries
    queries.forEach((query) => {
      fetchCharacters(query).then((data) => dispatch(getCharacters(data)))
    })
  } else {
    next(action)
  }
}

export default apiMiddleWare
