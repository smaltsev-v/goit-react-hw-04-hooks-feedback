import React from "react";
import PropTypes from "prop-types";
import s from './Control.module.css';


const ControlOptions = ({ options, onLeaveFeedback }) => {
  const btnNames = Object.keys(options);
  return (
    <ul className={s.list} >
      {btnNames.map((btnName) => (
        <li key={btnName}>
          <button
            className={s.FeedbackOption_button}
            name={btnName}
            onClick={onLeaveFeedback}
          >
            {btnName}
          </button>
        </li>
      ))}
    </ul>
  );
};



ControlOptions.propTypes  = {
    options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,

};


export default ControlOptions;