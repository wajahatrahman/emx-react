import React from "react";

import PropTypes from "prop-types";

import "./navigation-links.css";

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text Navigation-Link">
        {props.link1}
      </span>
    </nav>
  );
};

NavigationLinks.defaultProps = {
  rootClassName: "",
  link1: "Tournaments",
};

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  link1: PropTypes.string,
};

export default NavigationLinks;
