import React from 'react'
import styles from './Sidebar.module.css'
import { items } from './list';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({hide}) {
  const location = useLocation();
  return (
    <div className={styles.sidebar}>
      <ul>
        {items.map((item, index) => (
          <Link
            to={item.to}
            key={index}
            className={styles.link}>
            <li style={{ backgroundColor: item.to === location.pathname ? '#f4f4f4' : '' }}>
              {item.icon} <span style={{display:hide}}>{item.name} </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar