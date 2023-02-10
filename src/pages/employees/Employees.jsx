import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import { data } from '../../components/table/data';
// import Table from '../../components/table/Table';
import styles from './Employees.module.css'
function Employees() {
  return (
    <div className={styles.container}>
      <Header heading={"EMPLOYEES LIST"} button={"ADD EMPLOYEE"} to={'/employees/add'}/>
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>CITY</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>(
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.city} </td>
            <td>{item.phone}</td>
          </tr>
          ))}

        </tbody>
      </table>

      {/* <Outlet /> */}
    </div>
  )
}

export default Employees;