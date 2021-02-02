import React from 'react'
import './FilmCard.scss'

const FilmCard = ({ title, director, releaseDate, children, onClick }) => {
  return (
    <div className="card-container">
      <p>Movie Title : {title}</p>
      <p>Director : {director}</p>
      <p>ReleaseDate : {releaseDate}</p>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default FilmCard
