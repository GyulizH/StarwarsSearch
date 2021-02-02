import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Search from './Search/Search'
import CharactersList from './Characters/CharactersList'
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route
          path="/:movieTitle/characters"
          exact
          component={CharactersList}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
