import React from 'react'
import './Ingredients.css'

const Ingredients = ({ingredient}) => {
  return (
    <React.Fragment>
        <li>{ingredient.original}</li>
    </React.Fragment>
  )
}

export default Ingredients