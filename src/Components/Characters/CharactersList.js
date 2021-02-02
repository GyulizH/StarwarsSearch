import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Character from '../Character/Character'

import './CharactersList.scss'

const CharactersList = (props) => {
  const characters = useSelector((state) => state.characters)
  useEffect(() => {
    console.log(characters, 'characters')
  }, [])

  const goBack = () => {
    props.history.push('/')
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
