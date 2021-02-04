import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Character from '../Character/Character';

import './CharactersList.scss';

import { getCharactersFromAPI } from '../../Store/Search/SearchActions';

const CharactersList = (props) => {
  const movieId = props.match.params.id;
  const dispatch = useDispatch();

  const { data: movies, isLoading } = useSelector((state) => state.movies);
  const characters = useSelector((state) => state.characters);

  useEffect(() => {
    //here I find the movie for which I will show the character list only if the character list for the movie is not already in redux state
    if (!isLoading) {
      const movie = movies.find((m) => m.id === movieId);
      if (movie && movie.characters && characters.length ===0) {
        dispatch(getCharactersFromAPI(movie.characters));
      }
    }
  }, [isLoading,dispatch,movieId,movies,characters.length]);

  const goBack = () => {
    props.history.push('/');
  }
  return (
    <div className="characters-list-container">
      <div className="characters-list-title-container">
        <button onClick={goBack}>BACK</button>
        <p>CHARACTER LIST OF THE MOVIE TITLE</p>
      </div>
      <div className="characters-list">
        {characters.map((character) => {
          const { name, gender, birth_year, height } = character
          return (
            <Character
              key={name}
              name={name}
              gender={gender}
              birthYear={birth_year}
              height={height}
              className="list-item"
            />
          )
        })}
      </div>
    </div>
  )
}

export default CharactersList
