import {fetchCharacters, fetchMovies} from "../../Utils";

export const GET_FILMS_FROM_API = 'RETURN ALL FILMS FROM API'
export const GET_FILMS = 'RETURN FILMS TO REDUCER'
export const GET_CHARACTERS_FROM_API = 'RETURN ALL THE CHARACTERS IN A MOVIE'
export const GET_CHARACTERS = 'RETURN CHARACTERS TO REDUCER'

export const getFilmsFromAPI = () => {
  return {
    type: GET_FILMS_FROM_API
  }
}

export const  getFilms =  () => {
 return (dispatch) => {
   return  fetchMovies().then(data => {
     dispatch({
       type: GET_FILMS,
       payload:data
     })
   })
 }
}

export const getCharactersFromAPI = (queries) => {

  return (dispatch) => queries.forEach((query) => {
    fetchCharacters(query).then((data) => dispatch(getCharacters(data)))
  })
}

export const getCharacters = (data) => {
  return {
    type: GET_CHARACTERS,
    payload: data,
  }
}
