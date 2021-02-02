import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom'

import {
  getFilms,
  getCharactersFromAPI,
} from '../../Store/Search/SearchActions'
import { debounce } from '../../Utils'
import FilmCard from '../Card/FilmCard'

import './Search.scss'

const Search = (props) => {
  const dispatch = useDispatch()

  const { data: movies, isLoading } = useSelector((state) => state.movies)

  const [filteredMovies, setMovies] = useState([])
  const [currentQuery, setQuery] = useState('')

  useEffect(() => {
    dispatch(getFilms())
  }, [])

  useEffect(() => {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(currentQuery)
    )

    if (currentQuery !== '') {
      setMovies(filteredMovies)
    } else {
      setMovies([])
    }
  }, [currentQuery])

  const handleInput = debounce((e) => {
    setQuery(e.target.value.trim())
  }, 500)

  const goToCharacterList = (id) => {
    props.history.push(`/${id}/characters`)
  }

  return (
    <div className="app-container">
      <div className="search-bar-container">
        <p>Star Wars Movie Search</p>
        {isLoading && (
          <div className="no-result-or-loading-div">Loading...</div>
        )}
        {!isLoading && (
          <input
            onChange={handleInput}
            placeholder="Type to search a movie title..."
            autoFocus
          />
        )}
      </div>
      <ul className="search-results">
        {filteredMovies.length > 0 &&
          filteredMovies.map((movie) => {
            const { id, title, director, url } = movie
            const releaseDate = movie.release_date.slice(0, 4)
            return (
              <FilmCard
                title={title}
                director={director}
                key={url}
                releaseDate={releaseDate}
                onClick={() => {
                  goToCharacterList(id)
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
        <div className="no-result-or-loading-div">No Result</div>
      )}
    </div>
  )
}

export default Search
