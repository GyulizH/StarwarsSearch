import React from 'react'
import './FilmCard.scss'

const FilmCard = ({ title, director, releaseDate, children, onClick }) => {
  return (
    <div className="card-container">
      <p>
        <span>Movie Title</span>
        <span>{title}</span>
      </p>
      <p>
        <span>Director</span>
        <span>{director}</span>
      </p>
      <p>
        <span>Release Date</span>
        <span>{releaseDate}</span>
      </p>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}

export default FilmCard
