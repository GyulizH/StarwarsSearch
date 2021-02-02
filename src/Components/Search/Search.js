import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import {
  getFilmsFromAPI,
  getFilms,
  getCharactersFromAPI,
} from '../../Store/Search/SearchActions'

import FilmCard from '../Card/FilmCard'
import './Search.scss'

import { debounce } from '../../Utils'

const Search = (props) => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => {
    console.log('state', state)
    return state.movies
  })
  const [filteredMovies, setMovies] = useState([])
  const [currentQuery, setQuery] = useState('')

  useEffect(() => {}, [filteredMovies])

  const fetchFilms = () => {
    dispatch(getFilms())
  }
  const handleInput = debounce((e) => {
    dispatch(getFilms())
    let query = e.target.value
    setQuery(query)
    let filteredMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(query)
    })
    if (query !== '') {
      setMovies(filteredMovies)
    } else {
      setMovies([])
    }
  }, 500)

  const goToCharacterList = (list, title) => {
    dispatch(getCharactersFromAPI(list))
    props.history.push(`/${title}/characters`)
  }

  return (
    <div className="app-container">
      <div className="search-bar-container">
        <p>Star Wars Movie Search</p>
        <input
          onChange={handleInput}
          placeholder="Type to search a movie title..."
          autoFocus
        />
      </div>
      <ul className="search-results">
        {filteredMovies.length > 0 &&
          filteredMovies.map((movie) => {
            const { title, director, characters } = movie
            const releaseDate = movie.release_date.slice(0, 4)
            return (
              <FilmCard
                title={title}
                director={director}
                key={title}
                releaseDate={releaseDate}
                onClick={() => {
                  goToCharacterList(characters, title)
                }}
              >
                <BrowserRouter>
                  <Link to={`/${movie.title}/characters`}>
                    Click to view the Characters
                  </Link>
                </BrowserRouter>
              </FilmCard>
            )
          })}
      </ul>
      {currentQuery !== '' && filteredMovies.length === 0 && (
        <div>No Result</div>
      )}
    </div>
  )
}

export default Search
