import React from "react";
import "./Ingredients.css";
import PropTypes  from 'prop-types';


const Ingredients = ({ ingredient }) => {
  return (
    <React.Fragment>
      <li>{ingredient.original}</li>
    </React.Fragment>
  );
};

export default Ingredients;

Ingredients.propTypes = {
  ingredient: PropTypes.shape({
    id: PropTypes.number,
    original: PropTypes.string,
  }),
};
