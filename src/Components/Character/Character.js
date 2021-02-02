import React from 'react'

const Character = ({ name, gender, birthYear, height,className }) => {
  return (
    <div className={className}>
      <p>Name : {name}</p>
      <p>Gender : {gender}</p>
      <p>Birth Year : {birthYear}</p>
      <p>Height : {height}</p>
    </div>
  )
}

export default Character
