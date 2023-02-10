import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header({heading,button,to}) {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>{heading}</div>
        <Link to={to} className={styles.button}>{button}</Link>
    </div>
  )
}

export default Header;