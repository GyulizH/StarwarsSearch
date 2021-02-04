import { GET_FILMS, GET_CHARACTERS } from './SearchActions'

let initialState = {
  movies: {
    isLoading: true,
    data: [],
  },
  characters: [],
}

export const AllFilmsReducer = (state = initialState.movies, action) => {
  if (action.type === GET_FILMS) {
    return {
      isLoading: false,
      data: [
        ...action.payload.map((movie) => {
          //since the api response for a movie does not involve an id, i created a unique id for each movie
          const pathList = new URL(movie.url).pathname.split('/');
          const id = pathList[pathList.length - 2];

          return { id, ...movie }
        }),
      ],
    }
  }
  return state;
}

export const AllCharactersReducer = (
  state = initialState.characters,
  action
) => {
  if (action.type === GET_CHARACTERS) {
    return [...state, action.payload];
  }
  return state;
}
