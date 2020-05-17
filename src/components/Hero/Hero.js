import React from "react";
import styles from "./Hero.scss";

// class Hero extends React.Component {
//   render() {
//     return (
//       <header className={styles.component}>
//         <img
//           className={styles.image}
//           src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"
//         />
//         <h2 className={styles.title}>Things to do</h2>
//       </header>
//     );
//   }
// }

 const Hero = props => (
  <header className={styles.component}>
    <img
      className={styles.image}
      src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"
    />
    <h2 className={styles.title}>{props.titleText}</h2>
  </header>
);

export default Hero;
