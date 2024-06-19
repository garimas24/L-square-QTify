import React from "react";
 import logo from '../../assets/logo.png' ;
// Qtify\L-square-QTify\qtify\assets\logo.png
import styles from './Logo.module.css';
// import { Link } from "react-router-dom";

const Logo = () => {
    return (
      <img src={logo} alt="QTify Logo" className={styles.logo} />
    );
  }
  
  export default Logo;