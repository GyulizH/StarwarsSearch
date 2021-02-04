import { fetchCharacters, fetchMovies } from '../../Utils';
export const GET_FILMS = 'RETURN FILMS TO REDUCER';
export const GET_CHARACTERS = 'RETURN CHARACTERS TO REDUCER';


export const getFilms = () => {
  return (dispatch) => {
    return fetchMovies().then((data) => {
      dispatch({
        type: GET_FILMS,
        payload: data,
      })
    });
  }
}

export const getCharactersFromAPI = (queries) => {
  //the naming could be better here, the array of queries are not actually queries. They are the urls to fetch each character, present in a movie
  //there might be a better way to fetch all the characters though, since i am fetching each character and add it to redux state one by one.
  return (dispatch) =>
    queries.forEach((query) => {
      fetchCharacters(query).then((data) => dispatch(getCharacters(data)))
    });
}

export const getCharacters = (data) => {
  return {
    type: GET_CHARACTERS,
    payload: data,
  }
}
