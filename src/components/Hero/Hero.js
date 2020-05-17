import React from "react";
import styles from "./Hero.scss";
import propTypes from "prop-types";


 const Hero = props => (


  <header className={styles.component}>
    <img
      className={styles.image}
      src={props.ImageLink}
    />
    <h2 className={styles.title}>{props.titleText}</h2>
  </header>
);

Hero.propTypes = {
    titleText: propTypes.node.isRequired,
    ImageLink: propTypes.string.isRequired,
};

export default Hero;
