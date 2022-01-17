import React from "react";
import PropTypes from "prop-types";
import s from './Control.module.css';


function  ControlOptions ({ options, onLeaveFeedback }) {
  return options.map(option => (
    <button
      type="button"
      className={s.FeedbackOption_button}
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>

  ));
}


ControlOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  onLeaveFeedback: PropTypes.func.isRequired,
};


export default ControlOptions;