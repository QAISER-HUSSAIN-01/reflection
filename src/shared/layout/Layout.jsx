import React, { useState } from 'react';
import styles from './Layout.module.css';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function Layout() {
  const [hide, setHide] = useState('block')
  const handleSidebar = ()=>{
    if(hide === 'block'){
      setHide('none')
    }else{
      setHide('block')
    }
  }
  return (
    <div className={styles.layout}>
        <div className={styles.navbarContainer}>
            <Navbar handleSidebar={handleSidebar} />
        </div>
        <div className={styles.sectionContainer}>
        <div className={styles.sidebarContainer} >
            <Sidebar hide={hide}/>
        </div>
        <div className={styles.contentContainer}>
            <Outlet />
        </div>
        </div>
    </div>
  )
}

export default Layout;