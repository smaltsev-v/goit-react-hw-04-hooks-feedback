   
import React from "react";
import PropTypes from "prop-types";
import './Section.css';


const Section = ({ title, children }) => {
  return (
   <section className="ContainerWrapper">
      {title && <h1>{title} </h1>}

      <section>{children}</section>
    </section>
  );
};



Section.defaultProps = {
  title: " New Section",
};
Section.propTypes = {
  title: PropTypes.string,
};

Section.defaultProps = {
  title:''
};
export default Section;