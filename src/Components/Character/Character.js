import React from 'react'

const Character = ({ name, gender, birthYear, height, className }) => {
  return (
    <div className={className}>
        <p><span>Name</span><span>{name}</span></p>
        <p><span>Gender</span><span>{gender}</span></p>
        <p><span>Birth Year</span><span>{birthYear}</span></p>
        <p><span>Height</span><span>{height}</span></p>
    </div>
  );
}

export default Character
