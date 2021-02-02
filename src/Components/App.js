import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getFilms } from '../Store/Search/SearchActions'
import Search from './Search/Search'
import CharactersList from './Characters/CharactersList'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // This will load the list of movies at the beginning
    dispatch(getFilms())
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/:id/characters" exact component={CharactersList} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
