import React from 'react'

const Dog = ({result}) => {
  return (
        <div className="result">
          <img src={result.image.url} alt="Avataar"/>
          <h3>{result.bred_for}</h3>  
        </div>
  )
}

export default Dog